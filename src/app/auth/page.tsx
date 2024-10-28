"use client";

import Input from "@/components/input";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [variant, setVariant] = useState<"login" | "register">("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVarient) =>
      currentVarient === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      await axios.post("/api/register", {
        name,
        email,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, confirmPassword, login]);

  return (
    <div className="relative h-full w-full bg-[url('/hero.jpg')] bg-no-repeat bg-center bg-fixed">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image src="/logo.png" alt="Logo" width={200} height={0} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login"
                ? "Sign In"
                : "Unlimited movies, TV shows, and more"}
            </h2>
            <div>
              <div className="flex flex-col gap-4 ">
                {variant === "register" && (
                  <Input
                    id="name"
                    onChange={(eValue) => {
                      setName(eValue);
                    }}
                    value={name}
                    disabled={false}
                    label="Your name"
                  />
                )}
                <Input
                  id="email"
                  type="email"
                  onChange={(eValue) => {
                    setEmail(eValue);
                  }}
                  label="Email"
                  value={email}
                  disabled={false}
                />
                <Input
                  id="password"
                  type="password"
                  onChange={(eValue) => {
                    setPassword(eValue);
                  }}
                  label="Password"
                  disabled={false}
                  value={password}
                />
                {variant === "register" && (
                  <Input
                    id="confirmPassword"
                    type="password"
                    onChange={(eValue) => {
                      setConfirmPassword(eValue);
                    }}
                    value={confirmPassword}
                    disabled={false}
                    label="confirm password"
                  />
                )}
              </div>
            </div>

            <button
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
              onClick={variant === "login" ? login : register}
            >
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <div className="flex items-center gap-4 mt-8 justify-center">
              <div
                onClick={() =>
                  signIn("google", { callbackUrl: "/profiles", redirect: true })
                }
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() =>
                  signIn("github", { callbackUrl: "/profiles", redirect: true })
                }
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={30} />
              </div>
            </div>

            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "New to Netflix?"
                : "Already have an account ?"}
              <span
                className="text-white ml-2 hover:underline cursor-pointer"
                onClick={toggleVariant}
              >
                {variant === "login" ? "Sign up now." : "Sign in."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
