"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: any) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || email !== "admin@gmail.com") {
      router.push("/");
    }
  }, []);

  return <>{children}</>;
}