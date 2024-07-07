import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { cn } from "../lib/utlis";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  menuItemsClassName?: string;
  MenuButtonClassName?: string;
}

export default function BookmarksButton({
  children,
  onClick,
  menuItemsClassName,
  MenuButtonClassName,
}: Props) {
  return (
    <Menu>
      <MenuButton
        className={cn(
          "text-[#fff] flex items-center  justify-center",
          MenuButtonClassName
        )}
        onClick={onClick}
      >
        {!children ? (
          <>
            <span>Bookmarks</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </>
        ) : null}
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom"
        className={cn(
          "min-w-28 min-h-20 bg-[#fff] rounded origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",
          menuItemsClassName
        )}
      >
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100 p-1" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100 p-1" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100 p-1" href="/license">
            License
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
