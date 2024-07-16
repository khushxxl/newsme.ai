"use client";
import React, { use, useEffect, useState } from "react";
import { SparklesCore } from "../sparkles";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FeaturesList from "./FeaturesList";
import Pricing from "./Pricing";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SignIn } from "@clerk/clerk-react";
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import toast from "react-hot-toast";
import { BorderBeam } from "../magicui/border-beam";

function LandingPage() {
  const { isSignedIn } = useUser();
  const { userId } = useAuth();
  const router = useRouter();

  const [userFromDatabase, setuserFromDatabase] = useState<any>();

  const getUser = async () => {
    if (userId) {
      const userRef = doc(db, "users", userId);

      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setuserFromDatabase(docSnap.data());
        console.log(userFromDatabase);
      } else {
        console.log("No User Found!");
      }
    }
  };
  useEffect(() => {
    getUser();
  }, [userId]);
  useEffect(() => {
    console.log("user from datatabse has been updated:", userFromDatabase);
  }, [userFromDatabase]);

  const [userEnteredDomain, setuserEnteredDomain] = useState(
    userFromDatabase?.userDomain ? userFromDatabase?.userDomain : ""
  );

  const [signupEmail, setsignupEmail] = useState<string>();
  const handleClaimButton = async (e: any) => {
    e.preventDefault();
    if (!isSignedIn) {
      return router.push("/dashboard");
    }

    if (!userEnteredDomain) {
      return toast("Enter a preffered domain to continue", {
        icon: "🤕",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    if (isSignedIn && userId && userEnteredDomain) {
      const userRef = doc(db, "users", userId);
      const docSnap = await getDoc(userRef);
      let data;

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        data = docSnap.data();
        console.log(data);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }

      if (data?.userDomain == null || undefined) {
        await updateDoc(userRef, {
          userDomain: userEnteredDomain,
        }).then(() => {
          toast("Your domain is now live!", {
            icon: "🎉",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          setuserEnteredDomain("");
          router.push("/dashboard");
        });
      } else {
        toast("Your domain already exists!", {
          icon: "🤔",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    }
  };

  const subscribeUserToSignup = async () => {
    const emailRef = collection(db, "signups");
    const emailQuery = query(emailRef, where("email", "==", signupEmail));
    await getDocs(emailQuery).then(async (qSnap) => {
      const data = qSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
      console.log(data);
      if (data.length > 0) {
        return toast("Already Subscribed", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        await addDoc(collection(db, "signups"), {
          email: signupEmail,
          subscribed: true,
          timestamp: serverTimestamp(),
        }).then(() => {
          toast.success("You have Successfully Subscribed!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          setsignupEmail("");
        });
      }
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1
        style={{ lineHeight: 1.2 }}
        className="text-5xl text-center font-mono mt-20 font-semibold text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
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

      {/* Invite claim */}
      {/* <div className="flex items-center  font-bold border-[1px] p-2 rounded-lg shadow-xl border-gray-500">
        <p>newsme.ai/</p>
        <input
          className=" outline-none text-blue-400 bg-transparent focus:outline-none"
          placeholder="yourname"
          type="text"
          onChange={(e) => setuserEnteredDomain(e.target.value)}
          value={
            userFromDatabase?.userDomain
              ? userFromDatabase?.userDomain
              : userEnteredDomain
          }
        />
        {!userFromDatabase?.userDomain ? (
          <div
            onClick={handleClaimButton}
            className="flex space-x-2 cursor-pointer bg-black border-[px] rounded-lg p-2 border-white"
          >
            <p>Claim</p>
            <ArrowRight />
          </div>
        ) : (
          <div
            onClick={() => router.push("/dashboard")}
            className="flex space-x-2 cursor-pointer bg-black border-[px] rounded-lg p-2 border-white"
          >
            <p>Dashboard</p>
            <ArrowRight />
          </div>
        )}
      </div> */}

      {/* signup */}

      <div className="flex items-center  font-bold border-[1px] p-2 rounded-lg shadow-xl border-gray-500">
        <input
          className=" outline-none w-[300px] text-blue-400 bg-transparent focus:outline-none"
          placeholder="Enter Email"
          type="text"
          onChange={(e) => setsignupEmail(e.target.value)}
          value={signupEmail}
        />
        <div
          onClick={subscribeUserToSignup}
          className="flex space-x-2 cursor-pointer bg-black border-[px] rounded-lg p-2 border-white"
        >
          <p>Sign up</p>
        </div>
      </div>
      {/* {!isSignedIn && (
        <h1 className="mt-2 text-gray-500 underline">
          You need to sign up to claim your invite link
        </h1>
      )} */}
      <div className=" relative border-2 border-gray-700 rounded-3xl mt-5 p-2">
        <BorderBeam colorFrom="#808080" />
        {/* <iframe
          src="/email"
          className="h-[80vh] border-gray-800 border-4 p-2 rounded-xl w-[1252px]"
        /> */}

        <Image
          height={600}
          className=""
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
