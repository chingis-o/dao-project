import React from "react";
import Squares from "../icons/Squares";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { useAddress } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Sidebar() {
  const address = useAddress();
  return (
    <aside className="bg-neutral fixed w-14 h-screen flex flex-col justify-between">
      <Link href="/">
        <div className="h-14 grid place-items-center">
          <Squares />
        </div>
      </Link>
      <div className="h-14 grid place-items-center mb-2">
        {address && (
          <Link href="/profile">
            <div className="h-7 w-7 cursor-pointer">
              <Jazzicon
                diameter={30}
                seed={jsNumberForAddress(address ?? "")}
              />
            </div>
          </Link>
        )}
      </div>
    </aside>
  );
}
