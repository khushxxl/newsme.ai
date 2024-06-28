"use client";
import DataTable from "@/components/MainTable";
import { columns } from "@/components/columns";
import { PlusCircleIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@radix-ui/react-popover";
import { AddAudience } from "@/components/AddAudience";
import { AudienceSelector } from "@/components/AudienceSelector";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { useAuth } from "@clerk/nextjs";
import { AddAudienceMember } from "@/components/AddAudienceMember";

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

  const { userId, isSignedIn } = useAuth();

  const [audienceCollection, setaudienceCollection] = useState<any>([]);

  const getUserAudience = async () => {
    const q = query(
      collection(db, "audiences"),
      where("audienceLeaderId", "==", userId)
    );

    const audience: any[] = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      audience.push({ id: doc.id, ...doc.data() });
    });
    setaudienceCollection(audience);
    console.log("Audience", audienceCollection);
  };

  useEffect(() => {
    getUserAudience();
  }, [userId]);

  useEffect(() => {
    console.log("audienceCollection has been updated:", audienceCollection);
  }, [audienceCollection]);

  const [audienceSelected, setaudienceSelected] = useState<any>();
  console.log(audienceSelected);

  return (
    <div className="flex pt-10 flex-col max-w-6xl mx-auto justify-center">
      <div className="flex items-center space-x-3">
        <AddAudienceMember
          audRefId={audienceSelected?.id}
          getUserAudience={getUserAudience}
        />
        {/* {audienceSelected?.id} */}
        <AudienceSelector
          getUserAudience={getUserAudience}
          audienceSelected={audienceSelected}
          setaudienceSelected={setaudienceSelected}
          audienceCollection={audienceCollection}
        />
      </div>
      <DataTable data={audienceSelected?.members} columns={columns} />
    </div>
  );
}

export default Audience;
