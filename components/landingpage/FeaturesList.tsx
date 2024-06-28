import React from "react";
import Image from "next/image";

function FeaturesList() {
  const FeatureInfoCard = ({ title, info }) => {
    return (
      <div className="border-2 border-gray-700 rounded-xl p-3">
        <h1 className="text-xl ">{title}</h1>
        <p className="w-[400px] text-gray-400 mt-2">{info}</p>
      </div>
    );
  };

  return (
    <div className="items-center flex flex-col max-w-6xl w-full">
      <div className="flex mt-20 text-5xl items-center space-x-2">
        <h1>Send</h1>
        <h1 className=" text-yellow-500">emails seemlessly</h1>
      </div>

      <div className="flex items-center mt-10 justify-between  w-full ">
        <div className="space-y-4">
          <FeatureInfoCard
            info={` Create your multiple audiences with a simple invite link, through which the audience can view your personal profile.`}
            title={"Create your audience"}
          />
          <FeatureInfoCard
            info={`With the help of a Markdown Editor you can write and design emails easily & with the help of our AI integration make AI write and design emails for you.`}
            title={"Write Emails"}
          />
          <FeatureInfoCard
            info={`Send emails to a particular audience with a click of a button.`}
            title={"Send Emails"}
          />
        </div>
        <div>
          <Image
            className="border-[1px] border-gray-700 rounded-xl"
            height={500}
            alt=""
            src={require("../../assets/images/audiencePreview.png")}
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturesList;
