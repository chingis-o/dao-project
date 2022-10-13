import React from "react";
import { IMember } from "../interfaces/IMember";

interface IMembersList {
  members: IMember[];
  tagsByRole: string[];
  activeTag: number;
  query: string;
}

export default function MembersList({
  members,
  tagsByRole,
  activeTag,
  query,
}: IMembersList) {
  return (
    <section className="mt-[25px] text-left text-[#B3B9C5]">
      <div className="h-[50px] flex font-semibold">
        <span className="w-full">Member</span>
        <span className="w-full">Role</span>
      </div>
      <div className="flex flex-col">
        {members
          .filter((member) =>
            tagsByRole[activeTag] === "All"
              ? member
              : member.role === tagsByRole[activeTag]
          )
          .filter((member) => (query ? member.name.includes(query) : member))
          .map((member, index) => {
            return (
              <div className="h-[60px] flex" key={index}>
                <span className="h-[60px] w-full flex">
                  <div className="bg-[#D9D9D9] rounded-full h-[28px] w-[28px]" />
                  <span className="text-white ml-5">{member.name}</span>
                </span>
                <span className="w-full font-normal">{member.role}</span>
              </div>
            );
          })}
      </div>
    </section>
  );
}
