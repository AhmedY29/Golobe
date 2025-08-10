"use client";
import InputGroup from "@/components/InputGroup";
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ImageGallery from "../signin/ImageGallery";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  const handleSignUp = async () => {
    setLoading(true);
    setError("");
    try {
      if (firstName.trim() == "") {
        setError("Please Enter Your First Name");
        setLoading(false);
        return;
      }

      if (lastName.trim() == "") {
        setError("Please Enter Your Last Name");
        setLoading(false);
        return;
      }

      if (email.trim() == "") {
        setError("Please Enter Your Email");
        setLoading(false);
        return;
      }

      if (phone.trim() == "") {
        setError("Please Enter Your Phone Number");
        setLoading(false);
        return;
      }

      if (password.trim() == "") {
        setError("Please Enter Your Email");
        setLoading(false);
        return;
      }

      if (confirmPassword.trim() == "") {
        setError("Please Enter Your Confirm Password");
        setLoading(false);
        return;
      }

      if (confirmPassword.trim() != password.trim()) {
        setError("Passwords Doesn't match");
        setLoading(false);
        return;
      }

      const { error } = await supabase.auth.signUp({
        email: email.toLowerCase(),
        password,
        phone,
        options: {
          data: {
            firstName: firstName.toLowerCase(),
            lastName: lastName.toLowerCase(),
          },
        },
      });

      if (error) {
        throw error;
      }
      router.push("/");
    } catch (error: any) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
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

          <form
            action={handleSignUp}
            className="form-inputs flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputGroup
                label="First Name"
                value={firstName}
                required={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFirstName(e.target.value)
                }
                placeholder="Enter Your First name"
                type="text"
              />
              <InputGroup
                label="Last Name"
                value={lastName}
                required={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLastName(e.target.value)
                }
                placeholder="Enter Your Last name"
                type="text"
              />
              <InputGroup
                label="Email"
                value={email}
                required={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter Your Email"
                type="email"
              />
              <InputGroup
                label="Phone Number"
                value={phone}
                required={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
                placeholder="Enter Your Phone Number"
                type="text"
              />
            </div>
            <InputGroup
              label="Password"
              value={password}
              required={true}
              min={6}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              placeholder="Enter Your Password"
              type="password"
            />
            <InputGroup
              label="Confirm Password"
              value={confirmPassword}
              required={true}
              min={6}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              placeholder="Enter Your Confirm Password"
              type="password"
            />

            <div className="agreement flex items-center gap-3">
              <input
                className="w-4 h-4 accent-[#8DD3BB] cursor-pointer"
                type="checkbox"
                name="remember"
                required
                checked={agreement}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAgreement(e.target.checked)
                }
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
            {error && (
              <h1 className="text-[#FF8682]"> Error in Logged in: {error}</h1>
            )}
            <PrimaryButton
              text="Create Account"
              type="submit"
              loading={loading}
            />
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
