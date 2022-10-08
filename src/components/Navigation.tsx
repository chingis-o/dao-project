import React from "react";
import Link from "next/link";
import EllipsisHorizontal from "../icons/EllipsisHorizontal";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const daoId = router.query.dao as string;

  return (
    <nav className="flex justify-between h-[40px] items-center mb-[30px]">
      <div className="text-[33px] text-[#FAFAFB] font-bold">DEMO DAO</div>
      <ul className="flex gap-[30px] h-min text-white font-bold text-lg">
        <li>
          <Link href={`/${daoId}/` }>About</Link>
        </li>
        <li>
          <Link href={`/${daoId}/members` }>Members</Link>
        </li>
        <li>
          <Link
            href={`/${daoId}/treasure`
            }
          >
            Treasure
          </Link>
        </li>
        <li>
          <Link href={`/${daoId}/feed` }>Feed</Link>
        </li>
        <li className="text-white">
          <Link href={`/${daoId}/voting` }>Voting</Link>
        </li>
        <li className="flex items-center cursor-pointer">
          <EllipsisHorizontal />
        </li>
      </ul>
    </nav>
  );
}
