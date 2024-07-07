import React from "react";
import Logo from "../common/Logo";
import BookmarksButton from "./BookmarksButton";

export default function HeaderTop() {
  return (
    <div className="flex w-full items-center space-x-2 h-full justify-center relative -top-4 ">
      <Logo />
      <div className="w-1 h-4 border-l-[2px] border-[#a3a3a7]"></div>
      <BookmarksButton />
    </div>
  );
}
