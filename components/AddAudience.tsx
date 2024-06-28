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
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { PlusCircleIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export function AddAudience({ getUserAudience }: { getUserAudience: any }) {
  const [audienceName, setaudienceName] = useState("");

  // const {id} = useUser()
  const { userId, isSignedIn } = useAuth();

  const { user } = useUser();

  const createAudience = async () => {
    if (userId && isSignedIn) {
      await addDoc(collection(db, "audiences"), {
        name: audienceName,
        audienceLeaderId: userId,
        audienceLeaderName: user?.fullName,
        members: [],
      }).then(async () => {
        await getUserAudience();
        toast.success("Audience Created");
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="text-center mb-2 cursor-pointer">
          {/* <PlusCircleIcon className=" cursor-pointer" size={28} /> */}
          <h1 className="">Create a new Audience</h1>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create your Audience</DialogTitle>
          <DialogDescription>Name your audience</DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="mt-4">
            <Label htmlFor="topic" className="text-right">
              Enter Audience Name
            </Label>
            <Input
              placeholder=""
              id="topic"
              className="mt-4"
              onChange={(e) => setaudienceName(e.target.value)}
              value={audienceName}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={createAudience} className="space-x-3" type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
