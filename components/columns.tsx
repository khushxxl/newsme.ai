"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@radix-ui/react-popover";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

import Image from "next/image";

export const columns: ColumnDef<SubscribedUser>[] = [
  {
    accessorKey: "memberName",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <h1 className="mr-4">User Name</h1>
        </div>
      );
    },
    cell: ({ renderValue, ...props }) => {
      const name = renderValue() as string;

      return <div className="">{name}</div>;
    },
  },

  {
    accessorKey: "memberEmail",
    header: "Email Address",
  },
  // {
  //   accessorKey: "isSubscribed",
  //   header: "Subscription Status",
  // },
];
