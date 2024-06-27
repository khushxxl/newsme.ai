"use client";
import { auth, signIn } from "@/app/auth";
import { SignInButton, SignUp, UserButton, useAuth } from "@clerk/clerk-react";
import { PenSquare, User, Mail, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

function Navbar() {
  const { isSignedIn } = useAuth();
  const LinkComponent = ({
    isActive,
    title,
    Icon,
  }: {
    isActive: boolean;
    title: string;
    Icon?: any;
  }) => {
    return (
      <Link href={`${title.toLowerCase()}`}>
        <div
          className={`flex space-x-3 cursor-pointer items-center text-gray-300  w-fit  rounded-lg`}
        >
          <h1 className="text-sm">{title}</h1>
          <div>{Icon && <Icon size={18} />}</div>
        </div>
      </Link>
    );
  };

  return (
    <div className="flex items-center  justify-between bg-black w-full p-5 border-b-[1px] border-gray-600">
      <div className="flex ">
        <Link href={"/"}>
          <h1 className="font-bold cursor-pointer">newsme.ai</h1>
        </Link>
        <div className="flex items-center ml-6  space-x-4 ">
          <LinkComponent isActive={true} title={"Email"} Icon={PenSquare} />
          <LinkComponent isActive={false} title={"Audience"} Icon={Users} />
        </div>
      </div>

      {isSignedIn ? <UserButton /> : <SignInButton />}
    </div>
  );
}

export default Navbar;
