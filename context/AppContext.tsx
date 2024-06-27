"use client";
import React, { useState } from "react";

export const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [emailSubject, setemailSubject] = useState("");
  const [emailContent, setemailContent] = useState(``);

  return (
    <AppContext.Provider
      value={{ emailSubject, setemailSubject, emailContent, setemailContent }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
