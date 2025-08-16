"use client";
import Icons from "@/components/Icons";
import { Ship } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { prisma } from "@/lib/prisma";
import { useRouter } from "next/navigation";

export default function AuthForm({ origin }) {
  const [loading, setLoading] = useState(false);

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

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

  const onSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: signUpName,
          email: signUpEmail,
          password: signUpPassword,
        }),
      });
      console.log("respose: ", res);
      const data = await res.json();
      console.log("registration data : ", data);

      if (!res.ok) {
        throw new Error("registration failed");
      }

      setSuccess(true);

      router.push("/sign-in");
    } catch (error) {
      console.error("Registration error");
      setError("Unable to signup pls try again later");
    }
  };

  const onSignin = async (e) => {
    e.preventDefault();
    setError(null);

    const res = await signIn("credentials", {
      redirect: true,
      email : signInEmail,
      password : signInPassword,
    });

    if (res.error) {
      setError("Invalid Password");
    }
    return res;
  };
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
        {origin == "sign-up" ? (
          <form onSubmit={onSignup}>
            <div>
              <label>
                <span className="flex">Enter Email :</span>
              </label>
              <Input
                type="email"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label>
                <span className="flex">Enter Name :</span>
              </label>
              <Input
                type="text"
                value={signUpName}
                onChange={(e) => setSignUpName(e.target.value)}
                required
              />
            </div>

            <div>
              <label>
                <span className="flex">Set Password :</span>
              </label>
              <Input
                type="password"
                onChange={(e) => setSignUpPassword(e.target.value)}
                required
              />
            </div>

            {/* <label htmlFor="">
              <span className="flex">Confirm Password :</span>
            </label>
            <Input /> */}

            <Button className="flex w-full mt-5" type="submit">
              Sign Up
            </Button>
          </form>
        ) : (
          <form onSubmit={onSignin}>
            <label >
              <span className="flex">Enter Email :</span>
            </label>
            <Input
              type="email"
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
              required
            />
            {/* <label htmlFor="">
              <span className="flex">Enter Username :</span>
            </label>

            <Input /> */}
            <label >
              <span className="flex">Enter Password :</span>
            </label>
            <Input
              type="password"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
            />

            <Button className="flex w-full mt-5" type="submit">
              Sign In
            </Button>
          </form>
        )}

        {origin == "sign-up" ? (
          <></>
        ) : (
          <>
            <p className="mx-auto w-fit">Or</p>
            <button
              onClick={() => signIn("google")}
              className="flex mt-5 items-center justify-center gap-2 w-full py-3 px-4 text-white bg-gray-600 hover:bg-gray-700 rounded-lg transition-all duration-200"
            >
              <Icons />
              <span className="font-medium">Sign In</span>
            </button>
          </>
        )}

        {/* <button
          onClick={() => signIn("google")}
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
        </button> */}
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
