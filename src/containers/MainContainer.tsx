import React from "react";
import DaoLists from "../components/DaoLists";
import Sidebar from "../components/Sidebar";

export default function MainContainer({ children }: any) {
  return (
    <div className="container flex bg-[#1B202A] min-h-screen">
      <Sidebar />
      <DaoLists />
      <div className="py-[20px] px-20 grow">{children}</div>
    </div>
  );
}
