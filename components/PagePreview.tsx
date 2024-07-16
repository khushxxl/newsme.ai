import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function PagePreview({
  user,
  userFromDatabase,
}: {
  user: any;
  userFromDatabase: any;
}) {
  return (
    <div className="flex pt-10 justify-center h-[80vh] w-full  flex-col   rounded-lg  mt-5  max-w-6xl mx-auto">
      <div className="flex self-center">
        {userFromDatabase && userFromDatabase?.profileImg && (
          <Image
            className="rounded-full"
            height={150}
            width={150}
            alt=""
            src={userFromDatabase?.profileImg}
          />
        )}
      </div>
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="mt-6 font-bold text-3xl ">
          {userFromDatabase?.newsletterName
            ? userFromDatabase?.newsletterName
            : user?.firstName + "'s Newsletter"}
        </h1>
        <h1 className="mt-6 text-center  text-sm w-[600px] text-gray-400 ">
          {userFromDatabase?.newsletterDesc
            ? userFromDatabase?.newsletterDesc
            : ""}
        </h1>
      </div>
      <div className="flex self-center mt-20 ">
        <Button
          className={` rounded-3xl ${
            userFromDatabase?.activeDomainLink
              ? " bg-blue-500  hover:bg-blue-400 w-[300px]"
              : " bg-gray-500 hover:bg-none"
          } text-white bg-none`}
        >
          {userFromDatabase?.activeDomainLink
            ? "Subscribe"
            : "User has temporarily turned off Subscribing"}
        </Button>
      </div>
    </div>
  );
}

export default PagePreview;
