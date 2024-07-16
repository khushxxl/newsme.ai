"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "@/firebase";
import { useAuth, useUser } from "@clerk/nextjs";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { PlusCircleIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export function AddAudienceMember({
  audRefId,
  getUserAudience,
}: {
  audRefId: string;
  getUserAudience: any;
}) {
  const [memberEmail, setmemberEmail] = useState("");

  // const {id} = useUser()
  const { userId, isSignedIn } = useAuth();

  const { user } = useUser();
  const [memberName, setmemberName] = useState("");

  const addMemberToAudience = async () => {
    const audienceRef = doc(db, "audiences", audRefId);

    if (userId && isSignedIn) {
      await updateDoc(audienceRef, {
        members: arrayUnion({
          memberEmail: memberEmail,
          memberName: memberName,
          isSubscribed: true,
        }),
      }).then(async () => {
        await getUserAudience();
        toast.success("Audience Member Added");
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="">
          <PlusCircleIcon className=" cursor-pointer" size={28} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Member</DialogTitle>
        </DialogHeader>
        <div className="">
          <div className="mt-4">
            <Label htmlFor="topic" className="text-right">
              Enter Member Name
            </Label>
            <Input
              placeholder=""
              id="topic"
              className="mt-4"
              onChange={(e) => setmemberName(e.target.value)}
              value={memberName}
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="topic" className="text-right">
              Enter Member Email
            </Label>
            <Input
              placeholder=""
              id="topic"
              className="mt-4"
              onChange={(e) => setmemberEmail(e.target.value)}
              value={memberEmail}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={addMemberToAudience}
            className="space-x-3"
            type="submit"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
