"use client";
import { Switch } from "@/components/ui/switch";
import { useUser } from "@clerk/nextjs";
import { Clipboard, CopyIcon } from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";
import toast from "react-hot-toast";

function DashboardManger() {
  const { user } = useUser();
  return (
    <div className="flex pt-10 flex-col max-w-6xl mx-auto justify-center">
      {/* Settings  */}
      <div className="flex w-full justify-between max-w-4xl mx-auto  items-center">
        <div className="border-[1px] border-gray-500 rounded-xl p-5 flex items-center  flex-col">
          <h1>Total Signups</h1>
          <h1 className="font-bold">102</h1>
        </div>

        {/* option 1  */}
        <div className="flex space-y-5 flex-col items-center">
          <div className="flex items-center space-x-10 border-[1px] border-gray-600 p-4 rounded-lg ">
            <div>
              <h1 className="text-lg">Active Invite link</h1>
              <p className=" text-gray-500">
                Enable or disable your invite link for your audience
              </p>
            </div>
            <Switch />
          </div>
          {/* option 2  */}
          {/* <div className="flex items-center space-x-10">
            <div>
              <h1 className="text-lg">Active Invite link</h1>
              <p>Enable or disable your invite link for your audience</p>
            </div>
            <Switch />
          </div> */}
        </div>
      </div>
      <div className="relative focus:outline-none inline-flex group w-fit self-center mt-20">
        <div className="absolute focus:outline-none hover:outline-none transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <div className="relative space-x-10 focus:outline-none hover:outline-none  inline-flex items-center justify-center px-8 py-3 text-white transition-all duration-200 bg-gray-900 font-pj rounded-md ">
          <p className=" text-gray-400">newsme.ai/khushh</p>
          <Clipboard
            onClick={() => {
              toast.success("Link Copied");
            }}
            color="gray"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex pt-10 border-[1px] justify-center h-[80vh] w-full  flex-col border-gray-600 rounded-lg  mt-10  max-w-6xl mx-auto">
        <div className="flex self-center">
          {user && user?.hasImage && (
            <Image
              className="rounded-full"
              height={150}
              width={150}
              alt=""
              src={user?.imageUrl}
            />
          )}
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="mt-6 font-bold text-3xl ">
            {user?.firstName}'s Newsletter
          </h1>
          <h1 className="mt-6 text-center  text-sm w-[600px] text-gray-400 ">
            Et amet lorem tempor at diam diam diam sadipscing rebum, ipsum magna
            labore kasd sanctus diam rebum amet sadipscing, sed dolore
            consetetur sed nonumy magna no. Takimata lorem eirmod tempor.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default DashboardManger;
