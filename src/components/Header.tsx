import React from "react";
import { useAddress } from "@thirdweb-dev/react";
import ClipBoard from "../icons/ClipBoard";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import toast, { Toaster } from "react-hot-toast";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import Link from "next/link";

export default function Header() {
  const [, copy] = useCopyToClipboard();
  const address = useAddress();
  const addressTruncated =
    address?.slice(0, 6) + "..." + address?.slice(-4, address.length);

  const notify = (arg: string) =>
    toast(arg, {
      style: {
        borderRadius: "10px",
        background: "#343A46",
        color: "#fff",
      },
    });

  const copyToClipboard = async () => {
    if (address) {
      const success = await copy(address);
      return success ? notify("Link copied") : notify("Failed to copy link");
    }
    notify("Nothing to copy");
  };

  return (
    <div className="rounded-lg bg-[#2A2F3B] overflow-hidden">
      <div className="bg-[#9A6AE7] h-40"></div>
      <div className="absolute grid place-items-center translate-x-5 -translate-y-[45px] bg-[#2A2F3B] rounded-full h-[90px] w-[90px]">
        <Jazzicon diameter={80} seed={jsNumberForAddress(address ?? "")} />
      </div>
      <div className="p-6 pt-8">
        <div className="text-white flex justify-between">
          <div className="mb-5 mt-10">
            <div className="font-bold text-2xl">{addressTruncated}</div>
            <div className="text-[#767F91] flex">
              {addressTruncated}
              <span
                className="cursor-pointer ml-2 h-5 w-5"
                onClick={copyToClipboard}
              >
                <ClipBoard />
              </span>
              <Toaster position="bottom-center" />
            </div>
          </div>
          <Link href="profile/settings">
            <button className="h-fit px-3 py-2 bg-[#343A46] rounded-md text-sm font-semibold hover:bg-[#424958]">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
