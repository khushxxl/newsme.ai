"use client";
import PagePreview from "@/components/PagePreview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/firebase";
import { useAuth, useUser } from "@clerk/nextjs";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Clipboard, CopyIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

function DashboardManger() {
  const { user } = useUser();
  const { userId } = useAuth();
  const router = useRouter();

  const [userFromDatabase, setuserFromDatabase] = useState<any>();
  const [isUserDomainActive, setisUserDomainActive] = useState<boolean>();

  const getUser = async () => {
    if (userId) {
      const userRef = doc(db, "users", userId);

      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        setuserFromDatabase(docSnap.data());
        setnewsletterName(docSnap?.data()?.newsletterName);
        setnewsletterDescription(docSnap?.data()?.newsletterDesc);
        setisUserDomainActive(docSnap?.data()?.activeDomainLink);
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

  const [newsletterName, setnewsletterName] = useState(
    userFromDatabase?.newsletterName ? userFromDatabase?.newsletterName : ""
  );
  const [newsletterDescription, setnewsletterDescription] = useState(
    userFromDatabase?.newsletterDesc
  );

  const updateActiveLink = async () => {
    if (userId) {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        activeDomainLink: !isUserDomainActive,
      }).then(() => {
        setisUserDomainActive(!isUserDomainActive);
        toast(
          `Your invite link has been ${
            !isUserDomainActive ? "enabled" : "disabled"
          } `,
          {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
              alignItems: "center",
              textAlign: "center",
            },
          }
        );
      });
    }
  };

  const updateNewsLetterName = async () => {
    if (userId && newsletterName) {
      if (newsletterName == userFromDatabase?.newsletterName) {
        return toast.error("Choose a different name ", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            alignItems: "center",
            textAlign: "center",
          },
        });
      } else {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, {
          newsletterName: newsletterName,
        }).then(() => {
          toast(
            "Your newsletter's name has updated! Refresh the page to view changes",
            {
              icon: "🎉",
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
                alignItems: "center",
                textAlign: "center",
              },
            }
          );
        });
      }
    }
  };

  const updateNewsLetterDesc = async () => {
    if (userId && newsletterDescription) {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        newsletterDesc: newsletterDescription,
      }).then(() => {
        toast("Your newsletter's description has updated!", {
          icon: "🎉",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
    }
  };
  return (
    <div className="flex pt-10 flex-col max-w-6xl mx-auto justify-center">
      {/* Settings  */}
      <div className="flex flex-col w-full justify-between max-w-4xl mx-auto  items-center">
        <div className="border-[1px] border-gray-500 rounded-xl p-5 flex items-center  flex-col">
          <h1>Total Signups</h1>
          <h1 className="font-bold">102</h1>
        </div>

        {/* option 1  */}
        <div className="flex space-y-5 mt-10 flex-col items-center">
          <div className="flex items-center space-x-10 border-[1px] border-gray-600 p-4 rounded-lg ">
            <div>
              <h1 className="text-lg">Active Invite link</h1>
              <p className=" text-gray-500">
                Enable or disable your invite link for your audience
              </p>
            </div>
            <Switch
              onCheckedChange={updateActiveLink}
              checked={isUserDomainActive}
            />
          </div>

          <div className="flex w-full items-center justify-between border-[1px] border-gray-600 p-4 rounded-lg ">
            <div>
              <h1 className="text-lg">Name your Newsletter</h1>
              <Input
                value={newsletterName}
                onChange={(e) => setnewsletterName(e.target.value)}
                className="mt-4"
                placeholder=""
                contentEditable
              />
            </div>
            <Button
              onClick={updateNewsLetterName}
              className="bg-slate-900 hover:bg-black px-4 text-white border-gray-500 border-[1px]"
              type="button"
            >
              <h1 className="mx-2">Save</h1>
            </Button>
          </div>

          <div className="flex w-full items-center justify-between border-[1px] border-gray-600 p-4 rounded-lg ">
            <div>
              <h1 className="text-lg w-[300px]">Write Description</h1>
              <Textarea
                value={newsletterDescription}
                onChange={(e) => setnewsletterDescription(e.target.value)}
                className="mt-4"
                placeholder=""
              />
            </div>
            <Button
              onClick={updateNewsLetterDesc}
              className="bg-slate-900 hover:bg-black px-4 text-white border-gray-500 border-[1px]"
              type="button"
            >
              <h1 className="mx-2">Save</h1>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative focus:outline-none inline-flex group w-fit self-center mt-20">
        <div className="absolute focus:outline-none hover:outline-none transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <div className="relative space-x-10 focus:outline-none hover:outline-none  inline-flex items-center justify-center px-8 py-3 text-white transition-all duration-200 bg-gray-900 font-pj rounded-md ">
          <Link
            target="_blank"
            className=" cursor-pointer"
            href={`/${userFromDatabase?.userDomain}`}
          >
            <p className=" text-gray-400 cursor-pointer">
              newsme.ai/{userFromDatabase?.userDomain}
            </p>
          </Link>
          <Clipboard
            onClick={() => {
              toast.success("Link Copied");
            }}
            color="gray"
            className="cursor-pointer"
          />
        </div>
      </div>
      <h1 className="text-3xl mt-20 font-bold">Preview your page</h1>

      {/* Preview page  */}

      <div className="border-gray-600 border-[1px] rounded-3xl m-10">
        <PagePreview user={user} userFromDatabase={userFromDatabase} />
      </div>
    </div>
  );
}

export default DashboardManger;
