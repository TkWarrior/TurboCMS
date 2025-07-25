"use client";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import "react-quill-new/dist/quill.snow.css";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import { slugify } from "slugmaster";
import ImageUpload from "./ImageUpload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { z, ZodError } from "zod";

const schema = z.object({
  title : z.string().min(10 , {message : "Title must contain 10 character"}),
  excerpts : z.string().min(10 , {message : "Please Add Details for the excerpt"}),
  category : z.string().min(1 , {message:"Please Add a Category"}),
  metaDescription : z.string().optional(),
  content : z.string({message : "Please add some content"}),
  keyword : z.string().min(1 , {message : "Please add some keywords for better SEO"}),
  status : z.enum(["DRAFTS","PUBLISHED"])
})
export default function Editor({ onSave ,initialData }) {
  const { register, handleSubmit,setValue,formState: {errors} } = useForm({
    resolver : 
  });
  const [content, setContent] = useState("");
  const [ogImage, setOgImage] = useState("");
  const router = useRouter();

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
      if (data.status == "PUBLISHED") {
        router.push(`/blog/${generateSlug}`);
      }
   } catch (error) {
      console.error(error.message);
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

  return (
    <form
      className=" w-full h-screen justify-center space-y-2"
      onSubmit={handleSubmit(async(data)=>{
        try {
          await schema.parseAsync(data);
          handleForm(data);
        } catch (error) {
            if(error instanceof ZodError){
             
              error.errors.map((validationError) => {
              toast.error(validationError.message);
              });
            }else{
              console.error("An unexpected error occurred:", error);
              toast.error("An unexpected error occurred. Please try again.");
            }
          }
        
      })}
    >
      <input
        {...register("title")}
        placeholder="Enter the title"
        className="bg-zinc-200 w-full h-10 px-3 py-2 outline-none rounded"
      />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
      />

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
      <ImageUpload returnImage={setOgImage} savedImage={ogImage}/>
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
  );
}
