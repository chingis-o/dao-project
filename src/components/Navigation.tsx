import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const [pages] = useState(["About", "Members", "Treasure", "Feed", "Voting"]);
  const router = useRouter();
  const daoId = router.query.dao as string;

  return (
    <nav className="flex justify-between h-[40px] items-center mb-[30px]">
      <div className="text-[33px] text-[#FAFAFB] font-bold">DEMO DAO</div>
      <ul className="flex gap-[30px] h-min text-white font-bold text-lg">
        {pages.map((pathname, index) => {
          const link = `/${daoId}${
            pathname !== "About" ? `/${pathname.toLowerCase()}` : ""
          }`;
          return (
            <li
              key={index}
              className={`relative after:absolute after:content-[''] after:-inset-1 after:top-auto after:h-[2px] after:scale-x-0 ${
                router.asPath === link
                  ? "text-accent text-xl after:bg-accent"
                  : "after:bg-white"
              } hover:after:scale-x-100 hover:after:duration-300`}
            >
              <Link href={link}>{pathname}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
