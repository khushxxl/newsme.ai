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
import { useUser } from "@clerk/nextjs";
import { PlusCircleIcon, Sparkles } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export function AddAudience({}: {}) {
  const [audienceName, setaudienceName] = useState("");
  const { user } = useUser();
  const createAudience = async () => {
    await fetch("/api/createAudience", {
      method: "POST",
      body: JSON.stringify({
        audienceName: audienceName,
        userData: {
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
        },
      }),
    }).then(() => {
      toast.success("Audience Created");
    });
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
          <DialogTitle>Add Audience</DialogTitle>
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
