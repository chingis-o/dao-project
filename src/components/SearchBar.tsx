import React from "react";

interface ISearchBar {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ query, setQuery }: ISearchBar) {
  return (
    <div className="flex justify-between">
      <input
        type="search"
        name="searchMember"
        id="searchMember"
        placeholder="Enter username"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-[#252B36] w-[340px] h-11 px-[14px] pl-[43px] rounded-[8px] font-xl text-white outline-none"
      />
    </div>
  );
}
