"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Submitting:", form);
    setPending(true);

    const res = await fetch("api/auth/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      setPending(false);
      toast.success(data.message);
      router.push("/login");
    } else if (res.status === 400) {
      setError(data.message);
      setPending(false);
    }
  };


  const handleProvider =(
    event: React.MouseEvent<HTMLButtonElement>,
    value:"github" | "google"
  ) =>{
    event.preventDefault();
    signIn(value,{callbackUrl:"/dashboard"});

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D151E]">
      <div className="bg-[#25384d] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-1"
            >
              Full Name
            </label>
            <input
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              value={form.name}
              disabled={pending}
              placeholder="Full name"
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 bg-[#0D151E] border border-gray-600 rounded-md text-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-1"
            >
              Email
            </label>
            <input
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              value={form.email}
              disabled={pending}
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 bg-[#0D151E] border border-gray-600 rounded-md text-white"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-1"
            >
              Password
            </label>
            <input
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}
              disabled={pending}
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              className="w-full px-3 py-2 bg-[#0D151E] border border-gray-600 rounded-md text-white"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-white mb-1"
            >
              Confirm Password
            </label>
            <input
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
              value={form.confirmPassword}
              id="confirmPassword"
              disabled={pending}
              name="confirmPassword"
              type="password"
              required
              minLength={6}
              className="w-full px-3 py-2 bg-[#0D151E] border border-gray-600 rounded-md text-white"
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-[#25384d] focus:ring-[#25384d] border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-white">
              I agree to the Terms and Conditions
            </label>
          </div>

          {error && (
            <div className="bg-red-100 text-red-800 text-sm py-2 px-3 rounded-md">
              {error}
            </div>
          )}

          {/* {success && (
            <div className="bg-green-100 text-green-800 text-sm py-2 px-3 rounded-md">
              {success}
            </div>
          )} */}

          <button
            type="submit"
            disabled={pending}
            className={`w-full cursor-pointer py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              pending
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 text-white"
            }`}
          >
            {pending ? "Processing..." : "Register"}
          </button>
          <div className="items-center justify-center w-full ">
            <button
              onClick={(e) => handleProvider(e,"github")}
              className="flex cursor-pointer w-full items-center justify-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              <FaGithub className="text-xl" />
              Sign in with GitHub
            </button>
          </div>
          <div className="items-center justify-center w-full ">
            <button
              onClick={(e) => signIn("google")}
              className="flex  cursor-pointer w-full items-center justify-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-md border  border-gray-300 hover:bg-gray-100 150 transition-colors"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button>
          </div>
        </form>

        <div className="mt-4 text-sm text-center text-white">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
