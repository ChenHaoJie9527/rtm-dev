import React from "react";
import { Input } from "@headlessui/react";

export default function SearchInput() {
  return (
    <div className=" absolute bottom-6 left-1/2 -translate-x-1/2 min-w-[500px] h-[60px]">
      <Input
        type="text"
        className="w-full h-full rounded data-[hover]:shadow outline-none select-none px-4 data-[focus]:bg-blue-100"
        placeholder="Find remote developer jobs..."
      />
    </div>
  );
}
