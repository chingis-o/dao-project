import React from "react";
import Squares from "../icons/Squares";
import Fire from "../icons/Fire";
import GlobeAlt from "../icons/GlobeAlt";
import QuestionMarkCircle from "../icons/QuestionMarkCircle";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { useAddress } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Sidebar() {
  const address = useAddress();
  return (
    <aside className="bg-[#343A46] fixed w-14 h-screen flex flex-col justify-between">
      <div>
        <Link href="/">
          <div className="h-14 grid place-items-center border-l-2 border-[#F07300]">
            <Squares />
          </div>
        </Link>
        <div className="h-14 grid place-items-center">
          <Fire />
        </div>
        <div className="h-14 grid place-items-center">
          <GlobeAlt />
        </div>
      </div>
      <div className="mb-12">
        <div className="h-14 grid place-items-center">
          <QuestionMarkCircle />
          <Link href="/profile">
            <div className="h-7 w-7 cursor-pointer">
              <Jazzicon
                diameter={30}
                seed={jsNumberForAddress(address ?? "")}
              />
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
}
