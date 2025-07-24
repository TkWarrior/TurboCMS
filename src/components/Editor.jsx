"use client";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import "react-quill-new/dist/quill.snow.css";
import { useState } from "react";
import ReactQuill from "react-quill-new";
import { slugify } from "slugmaster";
import ImageUpload from "./ImageUpload";

export default function Editor({ onSave }) {
  const { register, handleSubmit } = useForm();
  const [content, setContent] = useState("");
  const [ogImage, setOgImage] = useState("");
  
  const handleForm = (data) => {
    console.log("form data", data);  
    const generateSlug = slugify(data.title)
    onSave({...data  , slug:generateSlug , ogImage , content})
  };

  console.log(ogImage)
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
      onSubmit={handleSubmit(handleForm)}
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
      <ImageUpload returnImage={setOgImage}/>
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
