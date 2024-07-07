import React from "react";
import { Input } from "@headlessui/react";

export default function SearchInput() {
  return (
    <div className=" absolute bottom-6 left-1/2 -translate-x-1/2 min-w-[500px] h-[60px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3e3c3c"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className=" absolute left-4 top-1/2 -translate-y-1/2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <Input
        type="text"
        className="w-full h-full rounded data-[hover]:shadow outline-none select-none px-12 data-[focus]:bg-blue-100"
        placeholder="Find remote developer jobs..."
      />
    </div>
  );
}
