import Icons from "@/components/Icons";
import { Ship } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/input";

export default function AuthForm({origin}) {
  const [loading, setLoading] = useState(false);
  const [email ,setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [name ,setName] = useState('');
  const[error , setError] = useState(false);
  
  // async function onSignIn() {
  //   try {
  //     setLoading(true);
  //     await signIn("google");
  //   } catch (error) {
  //     console.log(error);
  //     toast("Oops! Unable to Sign In");
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-slate-100 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-2xl p-8 space-y-6">
        <div className="flex flex-col items-center text-center space-y-2">
          <Ship className="text-gray-600" size={50} />
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome to <span className="text-gray-600">Turbo CMS</span>
          </h2>
          <p className="text-sm text-gray-500">
            Your all-in-one CMS to manage your content
          </p>
        </div>
        <form>
          <label htmlFor="">
            <span className="flex">Enter Email :</span>
          </label>
          <Input type="email" />
          <label htmlFor="">
            <span className="flex">Enter Username :</span>
          </label>

          <Input />
          <label htmlFor="">
            <span className="flex">Enter Password :</span>
          </label>
          <Input />
      
        </form>
        <p className="mx-auto w-fit">Or</p>
        <button
          onClick={() => signIn('google')}
          className="flex items-center justify-center gap-2 w-full py-3 px-4 text-white bg-gray-600 hover:bg-gray-700 rounded-lg transition-all duration-200"
        >
          <Icons />
          <span className="font-medium">
            {loading
              ? "Loading..."
              : origin == "sign-up"
              ? "Sign Up"
              : "Sign In"}
          </span>
        </button>
        <div className="w-full ">
          {origin == "sign-up" ? (
            <p className="text-gray-500 text-sm w-fit mx-auto ">
              Already A Member {"  "}
              <Link href="/sign-in" className="underline text-blue-400">
                Sign In
              </Link>
            </p>
          ) : (
            <p className="text-gray-500 text-sm w-fit mx-auto ">
              New To Turbo CMS {"  "}
              <Link href="/sign-up" className="underline text-blue-400">
                Sign Up
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
