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
import { Sparkles } from "lucide-react";

export function AIPromptDialog({
  writeUsingAI,
  aiPrompt,
  setaiPrompt,
}: {
  writeUsingAI: any;
  aiPrompt: any;
  setaiPrompt: any;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer space-x-2  bg-slate-900 w-fit p-3 items-center rounded-lg justify-center">
          <h1 className=" font-semibold">AI</h1>
          <Sparkles size={18} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <div className="mt-4">
            <Label htmlFor="topic" className="text-right">
              Describe your topic
            </Label>
            <Input
              value={aiPrompt}
              placeholder="Describe your topic here"
              id="topic"
              className="mt-4"
              onChange={(e) => setaiPrompt(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={writeUsingAI} className="space-x-3" type="submit">
            Write using AI <Sparkles className="ml-2" size={17} />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
