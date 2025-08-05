"use client";
import InputGroup from "@/components/InputGroup";
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ImageGallery from "../signin/ImageGallery";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div className="images hidden md:block h-full m-10">
        <ImageGallery images={["/imageGallery-1.png", "/imageGallery-2.png"]} />
      </div>
      <div className="form-container w-full flex justify-center my-10 h-screen">
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
            <h1 className="text-2xl font-bold mb-3">Sign up</h1>
            <p className="text-sm text-black/60">
              Let’s get you all st up so you can access your personal account.
            </p>
          </div>

          <div className="form-inputs flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputGroup
                label="First Name"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter Your First name"
                type="text"
              />
              <InputGroup
                label="Last Name"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter Your Last name"
                type="text"
              />
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
                label="Phone Number"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter Your Phone Number"
                type="text"
              />
            </div>
            <InputGroup
              label="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="Enter Your Password"
              type="password"
            />
            <InputGroup
              label="Confirm Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="Enter Your Confirm Password"
              type="password"
            />

            <div className="agreement flex items-center gap-3">
              <input
                className="w-4 h-4 accent-[#8DD3BB] cursor-pointer"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label htmlFor="remember">
                I agree to all the{" "}
                <a className="text-[#FF8682]" href="#">
                  Terms
                </a>{" "}
                and{" "}
                <a className="text-[#FF8682]" href="#">
                  Privacy Policies
                </a>{" "}
              </label>
            </div>

            <PrimaryButton text="Create Account" />
            <h1 className="text-center">
              Already have an account?{" "}
              <a className="text-[#FF8682]" href="#">
                Login
              </a>
            </h1>
            <div className="anther-way flex flex-col gap-8 mt-4">
              <div className="relative">
                <hr />
                <h1 className="absolute top-[-13px] left-[38%] md:left-[42%] bg-white px-2">
                  Or Sign up with
                </h1>
              </div>
              <PrimaryButton size="lg">
                <Image
                  src={"/google-icon.svg"}
                  alt="Google Icon"
                  width={40}
                  height={40}
                />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
