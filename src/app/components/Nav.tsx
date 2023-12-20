import React, { useState } from "react";
import { AlignJustify } from "lucide-react";
import Wrap from "./Wrap";
import Link from "next/link";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { buttonVariants } from "./ui/button";

const Nav = () => {
  return (
    <>
      <nav className="sticky top-0 h-14 inset-x-0  z-30  bg-white/50 border-b backdrop-blur-lg transition-all flex items-center ">
        <Wrap>
          <div className=" flex items-center justify-between">
            <Link href="/" target="_blank">
              Quill
            </Link>
            <div className=" flex space-x-8 items-center p-2 justify-center">
              <Link className="text-center" href="/pricing" target="_blank">
                Pricing
              </Link>
              <LoginLink>Sign in</LoginLink>
              <RegisterLink
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Get started
              </RegisterLink>
            </div>
          </div>
        </Wrap>
      </nav>
    </>
  );
};

export default Nav;
