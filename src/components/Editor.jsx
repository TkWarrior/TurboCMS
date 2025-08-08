"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import "react-quill-new/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import { slugify } from "slugmaster";
import ImageUpload from "./ImageUpload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import AiContent from "@/static/ai-content";
import { Bot, Feather } from "lucide-react";

const schema = z.object({
  title: z.string().min(10, { message: "Title must contain 10 character" }),
  excerpts: z
    .string()
    .min(10, { message: "Please Add Details for the excerpt" }),
  category: z.string().min(1, { message: "Please Add a Category" }),
  metaDescription: z.string().optional(),
  content: z.string({ message: "Please add some content" }),
  keyword: z
    .string()
    .min(1, { message: "Please add some keywords for better SEO" }),
  status: z.enum(["DRAFT", "PUBLISHED"]),
});

export default function Editor({ onSave, initialData }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [content, setContent] = useState("");
  const [ogImage, setOgImage] = useState("");
  const router = useRouter();
  const idearef = useRef(null);
  const closeDialogRef = useRef(null);
  const ReactQuillRef = useRef(null);
  const [selectionExist , setSelectionExist] = useState(false);

  useEffect(() => {
    if (initialData) {
      setValue("title", initialData.title);
      setContent(initialData.content);
      setValue("keyword", initialData.keyword || "");
      setValue("metaDescription", initialData.desc || "");
      setValue("excerpts", initialData.excerpts || "");
      setValue("category", initialData.catslug || "");
      setValue("status", initialData.status);
      setOgImage(initialData.thumbnail);
    }
  }, [initialData]);

  const handleForm = (data) => {
    try {
      const generateSlug = initialData ? initialData.slug : slugify(data.title);
      onSave({ ...data, slug: generateSlug, ogImage, content });
      if (initialData) {
        toast.success("Successfully updated the post");
      } else {
        toast.success("Successfully created the post");
      }
      if (data.status === "PUBLISHED") {
        router.push(`/blog/${generateSlug}`);
      }
    } catch (error) {
      console.error(error.message);
      toast.error("failed to save the post. Please try again.");
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "code-block"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
    "code-block",
  ];

  const handleChangeSelection = () =>{
        const selection = ReactQuillRef?.current?.getEditor()?.getSelection();
        setSelectionExist(selection&&selection.length>0);
  } 

  const handleContentGenerationUsingAI = async () => {
    try {
       const res = await AiContent({
         text: idearef.current.value,
         contentGen: true,
         customInstruction: "Generate Content with prpoer facts and figures",
       });
       setContent(res);
    } catch (error) {
      console.error(error.message);
    } finally {
      closeDialogRef.current.click();
    }
   
  };

  const handleParahrase = async() => { 
     const selection = ReactQuillRef?.current?.getEditor()?.getSelection();

     if(selection && selection.length>0){
        try {
          const selectedText = ReactQuillRef?.current?.getEditor()?.getText(selection.index , selection.length);
          console.log("selected text:",selectedText)
          const res = await AiContent({text : selectedText , contentGen:false , customInstruction : "Rephrase This Text "});
          ReactQuillRef?.current?.getEditor()?.deleteText(selection.index , selection.length);
          ReactQuillRef?.current?.getEditor()?.insertText(selection.index , res);
          setSelectionExist(false);
        } catch (error) {
          toast("paraphrase failed try again");
          console.error("paraphrase failed try again");
        }
     }else{
        toast("select the text first")
     }
     
  }
  return (
    <div>
      <form
        className=" w-[80%] mx-auto space-y-2 "
        onSubmit={
          handleSubmit(handleForm)
          //   async(data)=>{
          //   try {
          //     await schema.parseAsync(data);
          //     await handleForm(data);
          //   } catch (error) {
          //       if (error instanceof z.ZodError) {
          //         error.errors.forEach((err) => {
          //           toast.error(`${err.path.join(".")}: ${err.message}`);
          //         });
          //       } else {
          //         toast.error("Failed to save the post. Please try again.");
          //       }
          //     };
          // })
        }
      >
        <input
          {...register("title")}
          placeholder="Enter the title"
          className="bg-zinc-200 w-full h-10 px-3 py-2 outline-none rounded"
        />
        <ReactQuill className="overflow-y-auto h-100"
          ref={ReactQuillRef}
          onChangeSelection={handleChangeSelection}
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
        />
        {selectionExist && <Button onClick={handleParahrase}>Paraphrase using AI <Feather/></Button>}
        <input
          {...register("keyword")}
          placeholder="Enter Keyword"
          className="bg-zinc-200 w-full h-10 px-3 py-2 outline-none rounded"
        />
        <input
          {...register("metaDescription")}
          placeholder="Enter Meta Description"
          className="bg-zinc-200 w-full h-10 px-3 py-2 outline-none rounded"
        />

        <Dialog>
          <DialogTrigger className="flex gap-2 border-2 rounded-md border-black p-2">
            Generate Using AI<Bot/>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Write what do you want to generate?</DialogTitle>
              <DialogDescription>
                Create a quick draft using AI{" "}
              </DialogDescription>
              <textarea
                ref={idearef}
                rows={10}
                className="outline-none bg-zinc-300/50 p-3"
              />
            </DialogHeader>
            <DialogFooter>
              <Button onClick={handleContentGenerationUsingAI}>Generate</Button>
              <DialogClose asChild ref={closeDialogRef}>
                <Button className="bg-red-500">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <h2>SEO Data</h2>
        <input
          {...register("excerpts")}
          placeholder="Enter Excerpts"
          className="bg-zinc-200 w-full h-10 px-3 py-2 outline-none rounded"
        />

        <input
          {...register("category")}
          placeholder="Enter Category"
          className="bg-zinc-200 w-full h-10 px-3 py-2 outline-none rounded"
        />
        <ImageUpload returnImage={setOgImage} savedImage={ogImage} />
        <div className="flex gap-2">
          <select
            {...register("status")}
            className="bg-zinc-200 text-blacks rounded"
          >
            <option value="DRAFT">DRAFT</option>
            <option value="PUBLISHED">PUBLISHED</option>
          </select>
          <Button className="bg-zinc-200 text-black hover:cursor-pointer hover:bg-zinc-400">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
