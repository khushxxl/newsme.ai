"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { AddAudience } from "./AddAudience";

export const AudienceSelector = ({
  audienceCollection,
  audienceSelected,
  setaudienceSelected,
  getUserAudience,
}: {
  audienceCollection: any;
  audienceSelected: any;
  setaudienceSelected: any;
  getUserAudience: any;
}) => {
  // const {} = useContext(AppContext);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {audienceSelected && audienceSelected.name
            ? audienceSelected?.name
            : "Choose Audience"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-black mt-2 z-50 border-2 border-gray-500 rounded-lg">
        <div className="  p-4">
          {audienceCollection?.map((data: any, i: number) => {
            return (
              <div
                onClick={() => {
                  setaudienceSelected(data);
                }}
                className=" border-b-2 border-b-gray-500 p-2 cursor-pointer text-white"
                key={i}
              >
                <h1>{data?.name}</h1>
              </div>
            );
          })}
        </div>
        <div>
          <AddAudience getUserAudience={getUserAudience} />
        </div>
      </PopoverContent>
    </Popover>
  );
};
