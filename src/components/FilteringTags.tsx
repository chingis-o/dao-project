import React from "react";
import { IMember } from "../interfaces/IMember";

interface IFilteringTags {
  members: IMember[];
  tagsByRole: string[];
  activeTag: number;
  setActiveTage: React.Dispatch<React.SetStateAction<number>>;
}

export default function FilteringTags({
  members,
  tagsByRole,
  activeTag,
  setActiveTage,
}: IFilteringTags) {
  const calculateAmountByRole = (tag: string) => {
    return tag === "All"
      ? members.length
      : members.filter((member) => member.role === tag).length;
  };
  return (
    <ul className="flex gap-5 text-sm font-medium">
      {tagsByRole.map((role, index) => {
        return (
          <li
            key={index}
            className={`px-[20px] py-[10px] ${
              activeTag === index ? "bg-[#F07300]" : "bg-[#39404C]"
            } rounded-full text-white cursor-pointer`}
            onClick={() => setActiveTage(index)}
          >
            {role}
            <span className="font-normal ml-2">
              {calculateAmountByRole(role)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
