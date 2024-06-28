import {
  ChevronDown,
  ChevronLeft,
  Ellipsis,
  ImportIcon,
  MailIcon,
  Reply,
  SmileIcon,
  Trash2Icon,
} from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkToc from "remark-toc";
import { Preview } from "@react-email/components";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { AppContext } from "@/context/AppContext";
import { useUser } from "@clerk/nextjs";

function EmailPreview() {
  const { emailSubject, emailContent } = useContext(AppContext);

  const { user } = useUser();

  return (
    <div className="border-[10px]  w-[280px] h-[550px] mt-10 border-gray-700 rounded-3xl">
      {/* <Image
        height={1000}
        alt="Apple Mockup"
        src={require("../assets/images/appleMockup.png")}
      /> */}

      <div className="text-white mt-5 flex justify-between mx-4">
        <div>
          <ChevronLeft color="gray" size={24} className="cursor-pointer" />
        </div>
        <div className="flex space-x-4">
          <ImportIcon color="gray" size={20} className="cursor-pointer" />
          <Trash2Icon color="gray" size={20} className="cursor-pointer" />
          <MailIcon color="gray" size={20} className="cursor-pointer" />
          <Ellipsis color="gray" size={20} className="cursor-pointer" />
        </div>
      </div>

      <div className="m-3">
        <h1 className="text-lg">{emailSubject}</h1>
      </div>

      <div className="mt-5 flex mx-2 items-center justify-between">
        <div className="flex items-center">
          <div>
            <img
              height={30}
              width={30}
              src={user?.imageUrl}
              alt=""
              className="rounded-full"
            />
          </div>
          <div className="ml-2">
            <p className="text-xs">{user?.fullName}</p>
            <p className="text-xs flex text-gray-500 items-center">
              to me <ChevronDown size={15} className="ml-[1px]" />
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <SmileIcon color="gray" size={20} className="cursor-pointer" />
          <Reply color="gray" size={20} className="cursor-pointer" />
          <Ellipsis color="gray" size={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="p-2 mt-5 w-[250px] text-white h-[400px] overflow-y-auto">
        <ReactMarkdown
          className="prose reactMarkDown lg:prose-xl"
          children={emailContent}
        />
      </div>
    </div>
  );
}

export default EmailPreview;
