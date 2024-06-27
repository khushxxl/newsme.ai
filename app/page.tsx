"use client";

import EmailEditor from "@/components/EmailEditor";
import EmailPreview from "@/components/EmailPreview";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { SparklesCore } from "@/components/sparkles";
import { Button } from "@/components/moving-border";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // router.push("/emails");
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1
        style={{ lineHeight: 1.2 }}
        className="text-5xl text-center font-mono mt-20 font-semibold text-transparent bg-clip-text tracking-tight bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
      >
        Manage your emails <br /> in a single click
      </h1>
      <p className="text-gray-500 tracking-tight text-center text-lg mt-5">
        Send and manage emails to your audience using AI ✨
      </p>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={1}
        maxSize={2}
        particleDensity={100}
        className="w-full max-w-6xl mt-3 h-full"
        particleColor="#FFFFFF"
      />
      <div className=" mt-20">
        <iframe
          src="/email"
          className="h-[80vh] border-gray-800 border-4 p-2 rounded-xl w-[1252px]"
        />
      </div>
    </div>
  );
}
