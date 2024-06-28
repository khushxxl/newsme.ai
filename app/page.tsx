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
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import LandingPage from "@/components/landingpage/LandingPage";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // router.push("/emails");
  }, []);

  return <LandingPage />;
}
