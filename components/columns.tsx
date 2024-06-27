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

const NFTSelector = () => {
  // const {} = useContext(AppContext);
  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* <Button variant="outline">{selectedChain?.chain}</Button> */}
      </PopoverTrigger>
      <PopoverContent className="bg-black">
        <div className="w-[200px] p-4">
          {/* {options?.map((data: any, i: number) => {
            return (
              <div
                onClick={() => {}}
                className="mt-4 cursor-pointer text-white"
                key={i}
              >
                <h1>{data?.chain}</h1>
              </div>
            );
          })} */}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export const columns: ColumnDef<SubscribedUser>[] = [
  {
    accessorKey: "img",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <h1 className="">
            <NFTSelector />
          </h1>
        </div>
      );
    },
    cell: ({ renderValue, ...props }) => {
      const img = renderValue() as string;

      return (
        <div className="flex items-center">
          {/* <Image alt="" height={100} width={100} src={img} /> */}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
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
    accessorKey: "email",
    header: "Email Address",
  },
  {
    accessorKey: "isSubscribed",
    header: "Subscription Status",
  },
];
