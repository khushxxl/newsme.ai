"use client";
import EmailEditor from "@/components/EmailEditor";
import EmailPreview from "@/components/EmailPreview";
import React from "react";

function ComposeEmail() {
  return (
    <div className="flex max-w-6xl mx-auto justify-between">
      <EmailEditor />
      <EmailPreview />
    </div>
  );
}

export default ComposeEmail;
