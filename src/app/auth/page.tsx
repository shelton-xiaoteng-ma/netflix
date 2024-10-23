"use client";

import Input from "@/components/input";
import Image from "next/image";
import { useCallback, useState } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState<"login" | "register">("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVarient) =>
      currentVarient === "login" ? "register" : "login"
    );
  }, []);

  const handleSubmit = () => {
    console.log(`submit login: ${email} ${password}`);
  };

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
            {variant === "login" && (
              <div>
                <div className="flex flex-col gap-4 ">
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
                </div>
                <button
                  className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            )}

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
