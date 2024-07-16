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

export function AddAudienceMember({
  audRefId,
  getUserAudience,
}: {
  audRefId: string;
  getUserAudience: any;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="">
          <h1>Sign up</h1>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Member</DialogTitle>
        </DialogHeader>
        <div className=""></div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
