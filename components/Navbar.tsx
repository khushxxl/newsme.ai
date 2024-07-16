"use client";
import { auth } from "@/firebase";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { PenSquare, User, Mail, Users, PanelBottom } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  // const handleSignUp = async () => {
  //   signInWithPopup(auth, provider).then((result) => {
  //     console.log(user);
  //     router.push("/email");
  //   });
  // };

  const { isSignedIn } = useAuth();

  const LinkComponent = ({
    isActive,
    title,
    Icon,
    link,
  }: {
    isActive: boolean;
    title: string;
    Icon?: any;
    link: string;
  }) => {
    return (
      <Link href={link}>
        <div
          className={`flex space-x-3 cursor-pointer items-center text-gray-300  w-fit  rounded-lg`}
        >
          <h1 className="text-sm">{title}</h1>
          <div>{Icon && <Icon size={18} />}</div>
        </div>
      </Link>
    );
  };

  // const user = auth?.currentUser;
  // console.log(user?.displayName);s
  const pathname = usePathname();

  // Define the routes where you don't want the navbar
  const noNavbarRoutes = ["/userinvite"];

  // Check if the current path is in the list of noNavbarRoutes
  const showNavbar = !noNavbarRoutes.includes(pathname);
  if (showNavbar) {
    return (
      <div className="flex items-center sticky top-0  justify-between z-50 bg-black w-full p-5 border-b-[1px] border-gray-600">
        <div className="flex ">
          <Link className="flex items-center space-x-2" href={"/"}>
            {/* <Image
              alt=""
              height={50}
              src={require("../assets/images/newsmeAI.png")}
            /> */}
            <h1 className="font-bold cursor-pointer">newsme.ai</h1>
          </Link>
          <div className="flex items-center ml-6  space-x-4 ">
            {/* <LinkComponent
              isActive={false}
              title={"Dashboard"}
              Icon={PanelBottom}
              link={"/dashboard"}
            />
            <LinkComponent
              isActive={true}
              title={"Email"}
              Icon={PenSquare}
              link={"/email"}
            />
            <LinkComponent
              isActive={false}
              title={"Audience"}
              Icon={Users}
              link={"/audience"}
            /> */}
          </div>
        </div>

        {/* {isSignedIn ? <UserButton /> : <SignInButton />} */}

        {/* {auth.currentUser && auth.currentUser?.photoURL ? (
        // user.displayName
        <img
          className="h-[30px] w-[30px] rounded-full cursor-pointer"
          src={auth?.currentUser?.photoURL}
          alt=""
        />
      ) : (
        <div
          onClick={handleSignUp}
          className={`flex space-x-3 cursor-pointer items-center text-gray-300  w-fit  rounded-lg`}
        >
          <h1 className="text-sm">{"Sign up"}</h1>
        </div>
      )} */}
      </div>
    );
  }
}

export default Navbar;
