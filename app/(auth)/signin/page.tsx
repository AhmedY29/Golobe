"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import InputGroup from "@/components/InputGroup";
import PrimaryButton from "@/components/PrimaryButton";
import ImageGallery from "./ImageGallery";
import { createClient } from "@/utils/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  const handleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      if (email.trim() == "") {
        setError("Please Enter Your Email");
        setLoading(false);
        return;
      }

      if (password.trim() == "") {
        setError("Please Enter Your Email");
        setLoading(false);
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      router.push("/");
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSignInWithGoogle = async () => {
    setLoading(true);
    setError("");
    console.log("google 1");
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `/`,
          // redirectTo: `${window.location.origin}/auth/callback${
          //   next ? `?next=${encodeURIComponent(next)}` : ""
          // }`,
        },
      });
      console.log("google 2");

      if (error) {
        throw error;
      }
      console.log("google 3");
    } catch (error: any) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div className="form-container w-full flex justify-center my-10">
        <div className="form-content flex flex-col gap-10 w-[80%]">
          <div className="form-logo">
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                alt="Golobe Logo"
                width={100}
                height={80}
              />
            </Link>
          </div>
          <div className="form-title">
            <h1 className="text-2xl font-bold mb-3">Login</h1>
            <p className="text-sm text-black/60">
              Login to access your Golobe account
            </p>
          </div>

          <form
            action={handleSignIn}
            className="form-inputs flex flex-col gap-5"
          >
            <InputGroup
              label="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="Enter Your Email"
              type="email"
            />
            <InputGroup
              label="Password"
              value={password}
              min={6}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="Enter Your Password"
              type="password"
            />

            <div className="flex justify-between">
              <div className="remember flex items-center gap-3">
                <input
                  className="w-4 h-4 accent-[#8DD3BB] cursor-pointer"
                  type="checkbox"
                  name="remember"
                  id="remember"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="forger-password">
                <a className="text-[#FF8682]" href="#">
                  Forget Password?
                </a>
              </div>
            </div>
            {error && (
              <h1 className="text-[#FF8682]"> Error in Logged in: {error}</h1>
            )}
            <PrimaryButton type="submit" text="Login" loading={loading} />
            <h1 className="text-center">
              Don’t have an account?{" "}
              <Link href={"/signup"}>
                <span className="text-[#FF8682]">Sign up</span>
              </Link>
            </h1>
            <div className="anther-way flex flex-col gap-8 mt-4">
              <div className="relative">
                <hr />
                <h1 className="absolute top-[-13px] left-[38%] md:left-[42%] bg-white px-2">
                  Or Login with
                </h1>
              </div>
              <PrimaryButton onClick={handleSignInWithGoogle} size="lg">
                <Image
                  src={"/google-icon.svg"}
                  alt="Google Icon"
                  width={40}
                  height={40}
                />
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
      <div className="images hidden md:block h-full m-10">
        <ImageGallery images={["/imageGallery-1.png", "/imageGallery-2.png"]} />
      </div>
    </div>
  );
}
