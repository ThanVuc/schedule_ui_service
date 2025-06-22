"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const PersonalAccount = () => {
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathName === "/personal-account") {
      router.push("/personal-account/home");
    }
  }, [pathName, router]);
  return <></>;
};

export default PersonalAccount;
