import React from "react";
import { SparklesCore } from "../sparkles";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FeaturesList from "./FeaturesList.tsx";
import Pricing from "./Pricing";

function LandingPage() {
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
      <div className="flex items-center  font-bold border-[1px] p-2 rounded-lg shadow-xl border-gray-500">
        <p>newsme.ai/</p>
        <input
          className=" outline-none text-blue-400 bg-transparent focus:outline-none"
          placeholder="yourname"
          type="text"
        />
        <div className="flex space-x-2 cursor-pointer bg-black border-[px] rounded-lg p-2 border-white">
          <p>Claim</p>
          <ArrowRight />
        </div>
      </div>
      <div className=" mt-5 p-4">
        {/* <iframe
          src="/email"
          className="h-[80vh] border-gray-800 border-4 p-2 rounded-xl w-[1252px]"
        /> */}

        <Image
          height={600}
          className="border-2 border-gray-700 rounded-3xl"
          // height={700}
          alt=""
          src={require("../../assets/images/homePreview.png")}
        />
      </div>

      {/* Features  */}
      <FeaturesList />
      <Pricing />
    </div>
  );
}

export default LandingPage;
