import React from "react";
import Background from "../common/Background";

interface Props {
  children: React.ReactNode;
}
export default function Header({ children }: Props) {
  return (
    <header className=" w-full relative h-[200px]">
      <Background />
      {children}
    </header>
  );
}
