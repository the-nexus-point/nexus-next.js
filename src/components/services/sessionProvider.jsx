"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";



const SessionProviders = ({ children }) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviders;