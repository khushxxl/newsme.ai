"use client";
import PagePreview from "@/components/PagePreview";
import { db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

function UserInvitePreview({ params }: { params: { slug: string } }) {
  const [userFound, setuserFound] = useState();
  const [loading, setloading] = useState(true);
  const getUser = async () => {
    const q = query(
      collection(db, "users"),
      where("userDomain", "==", params.slug)
    );

    const user: any[] = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      user.push({ id: doc.id, ...doc.data() });
    });

    if (user.length > 0) {
      setuserFound(user[0]);
      console.log(userFound);
    }
    setloading(false);
  };

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      getUser();
      //   setloading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("user has been updated:", userFound);
  }, [userFound]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <BounceLoader size={50} color="white" />
      </div>
    );
  }
  return <PagePreview user={undefined} userFromDatabase={userFound} />;
}

export default UserInvitePreview;

// user link - newsme.ai/khushh
