"use client";
import { AppContext } from "@/context/AppContext";
import { SendIcon, Sparkles } from "lucide-react";
import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AIPromptDialog } from "./AIPromptDialog";
import { useAuth } from "@clerk/nextjs";

function EmailEditor() {
  const textareaRef = useRef(null);

  const handleInput = (event) => {
    // Reset the height to auto to shrink it if needed
    textareaRef.current.style.height = "auto";
    // Set the height to the scrollHeight of the textarea
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const [aiPrompt, setaiPrompt] = useState("");

  const { emailSubject, setemailSubject, emailContent, setemailContent } =
    useContext(AppContext);

  const sendEmail = async () => {
    if (emailSubject && emailSubject) {
      await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          emailSubject,
          emailContent,
        }),
      }).then(() => {
        setemailSubject("");
        toast.success("Email Sent");
      });
    }
  };

  const writeUsingAI = async () => {
    try {
      const response = await fetch("http://localhost:8800/createMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: aiPrompt }),
      });

      const data = await response.json();
      console.log(data?.content);
      setemailContent(data?.content);
    } catch (error) {
      console.error("Error generating HTML/CSS:", error);
    }
  };

  return (
    <div className="bg-[#21222B] mt-10 flex flex-col rounded-xl h-fit max-w-2xl w-full">
      <div className="flex items-center space-x-5 mt-5 w-full">
        <div className="ml-5">
          <img
            height={50}
            width={50}
            src="https://pbs.twimg.com/profile_images/1743712842233307136/e8uK94Yf_400x400.jpg"
            alt=""
            className="rounded-full"
          />
        </div>

        <div className="max-w-2xl w-full">
          <div className="bg-[#282936] p-3 border-gray-500 max-w-md w-full border-[1px] rounded-xl">
            <div className="flex items-center">
              <p className="text-gray-400">from:</p>
              <p className="ml-2">khushaal.choithramani@gmail.com</p>
            </div>
          </div>
          <div className="bg-[#282936] p-3 mt-2 border-gray-500 max-w-lg border-[1px] rounded-xl">
            <div className="flex items-center">
              <p className="text-gray-400">Subject:</p>
              <input
                value={emailSubject}
                onChange={(e) => setemailSubject(e.target.value)}
                type="text"
                className="ml-2 bg-transparent w-full focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-10 ml-10 text-xs text-gray-400 underline">
        <code>This is a Markdown Editor</code>
      </h1>
      <div className="bg-[#282936] rounded-2xl p-2 m-10 mt-2  border-2 border-gray-700">
        <textarea
          ref={textareaRef}
          className="h-full w-full outline-none min-h-[100px] overflow-hidden bg-transparent"
          onInput={handleInput}
          onChange={(e) => setemailContent(e.target.value)}
          style={{ resize: "vertical" }}
          value={emailContent}
        />
      </div>
      <div className="flex  ml-10 space-x-4 ">
        <AIPromptDialog
          aiPrompt={aiPrompt}
          setaiPrompt={setaiPrompt}
          writeUsingAI={writeUsingAI}
        />
        <div
          onClick={sendEmail}
          className="flex cursor-pointer space-x-2  bg-slate-900 w-fit p-3 items-center rounded-lg justify-center"
        >
          <h1 className="font-semibold">Improve</h1>
          <Sparkles size={18} />
        </div>
        <div
          onClick={sendEmail}
          className="flex cursor-pointer space-x-2  bg-slate-900 w-fit p-3 items-center rounded-lg justify-center"
        >
          <h1 className="font-semibold">Video to Email</h1>
          <Sparkles size={18} />
        </div>
      </div>
      <div
        onClick={sendEmail}
        className="flex cursor-pointer self-end space-x-2 mb-4 mr-10 bg-blue-900 w-fit p-3 items-center rounded-lg justify-center"
      >
        <h1 className=" font-semibold">Send Email</h1>
        <SendIcon size={18} />
      </div>
    </div>
  );
}

export default EmailEditor;
