"use client";

import { useState } from "react";
import Loader from "@/components/Loader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete && (
        <Loader onComplete={() => setLoadingComplete(true)} />
      )}
      {children}
    </>
  );
}
