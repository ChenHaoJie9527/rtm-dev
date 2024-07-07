import React from "react";
import Background from "../common/Background";

interface Props {
  children: React.ReactNode;
}
export default function Header({ children }: Props) {
  return (
    <header className="bg-[#0d6af5] w-full">
      <Background />
      {children}
    </header>
  );
}
