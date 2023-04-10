"use client";
import { Inter } from "next/font/google";
import { useEndpoints } from "@/hooks/useEndpoints";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const endpoints = useEndpoints();
  console.log(endpoints);
  return <main className=""></main>;
}
