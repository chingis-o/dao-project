import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between h-[40px] items-center mb-[30px]">
      <div className="text-[33px] text-[#FAFAFB] font-bold">DEMO DAO</div>
      <ul className="flex gap-[30px] h-min text-white font-bold text-lg">
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/members">Members</Link>
        </li>
        <li>
          <Link href="/treasure">Treasure</Link>
        </li>
        <li>
          <Link href="/feed">Feed</Link>
        </li>
        <li className="text-white">
          <Link href="/voting">Voting</Link>
        </li>
        <li className="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </li>
      </ul>
    </nav>
  );
}
