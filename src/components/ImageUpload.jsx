import { storage } from "@/static/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react"

export default function ImageUpload({returnImage}){
    const [imageAsFile , setImageAsFile] = useState("");
    const [loading , setLoading] = useState(false);
    const [imageUrl , setImageUrl] = useState("");
    const hanldeImageAsFile = async(e) =>{
        const image = e.target.files[0];
        setImageAsFile(image);
        if(image){
            uploadToFirebase(image);
        }     
    }

    const uploadToFirebase = async(image) =>{
        setLoading(true);
       const storageRef = ref(storage,`images/${image.name}`)
        try {
            await uploadBytes(storageRef,image);
            const url = await getDownloadURL(storageRef)
            setImageUrl(url)
            returnImage(url)
            console.log("uploaded successfully to firebase")
        } catch (error) {
            console.log("error took place while uploading to firebase")
        } finally{
            setLoading(false)
        }
    }

    return (
      <div className="border-dashed border-2 p-2 w-fit">
        <label className="font-bold">
          <span>Upload Cover Image Here</span>
          <input type="file" hidden onChange={hanldeImageAsFile} />
        </label>
        {loading && (
            <div>Loading....</div>
        )}
        {imageUrl && (
          <div className="w-fit">
            <h2>Uploaded successfully!</h2>
            <img className="h-50" src={imageUrl} style={{ width: "100%" }}></img>
          </div>
        )}
      </div>
    );
}