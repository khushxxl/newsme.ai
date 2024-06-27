import DataTable from "@/components/MainTable";
import { columns } from "@/components/columns";
import { PlusCircleIcon } from "lucide-react";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@radix-ui/react-popover";
import { AddAudience } from "@/components/AddAudience";
function Audience() {
  const data: SubscribedUser[] = [
    {
      name: "Khushaal",
      email: "khushaal@.com",
      isSubscribed: true,
    },
    {
      name: "Ginni",
      email: "ginni@.com",
      isSubscribed: false,
    },
  ];

  return (
    <div className="flex pt-10 flex-col max-w-6xl mx-auto justify-center">
      <AddAudience />
      <DataTable data={data} columns={columns} />
    </div>
  );
}

export default Audience;
