import React from "react";

interface Props {
  children?: React.ReactNode;
}
export default function Main({ children }: Props) {
  return <main className="flex-1 bg-[#e5ebf1] flex justify-center">
    {children}
  </main>;
}
