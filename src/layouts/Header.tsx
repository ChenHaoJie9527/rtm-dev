import React from "react";
import Background from "../common/Background";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Header({ children, className }: Props) {
  return (
    <header
      className={cn(
        "w-full relative flex items-center justify-center flex-col h-[200px]",
        className
      )}
    >
      <Background />
      {children}
    </header>
  );
}
