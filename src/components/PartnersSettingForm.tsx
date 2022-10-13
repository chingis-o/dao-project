import React from "react";

interface IPartnersSettingForm {
  partners: {
    address: string;
    tokens: number;
  }[];
  setPartners: React.Dispatch<
    React.SetStateAction<
      {
        address: string;
        tokens: number;
      }[]
    >
  >;
}

export default function PartnersSettingForm({
  partners,
  setPartners,
}: IPartnersSettingForm) {
  return (
    <div className="mt-10">
      <div className="text-lg">Set up your partners & Shares</div>
      <div className="mt-5">
        {partners.map((data, index) => {
          return (
            <>
              <label htmlFor="">Partner address</label>
              <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                <input
                  type="text"
                  className="border-none bg-transparent outline-none"
                  placeholder="Enter a partner address"
                  value={data.address}
                  onChange={(e) => {
                    setPartners((prev) => [
                      ...prev.slice(0, index),
                      {
                        address: e.target.value,
                        tokens: prev[index].tokens,
                      },
                      ...prev.slice(index + 1, prev.length),
                    ]);
                  }}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="">Government token amount</label>
                <div className="mt-3 mb-5 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
                  <input
                    type="number"
                    className="border-none bg-transparent outline-none"
                    value={data.tokens}
                    onChange={(e) => {
                      setPartners((prev) => [
                        ...prev.slice(0, index),
                        {
                          address: prev[index].address,
                          tokens: Number(e.target.value),
                        },
                        ...prev.slice(index + 1, prev.length),
                      ]);
                    }}
                  />
                </div>
              </div>
            </>
          );
        })}

        <div className="mt-7 mb-7">
          <input
            type="button"
            value="Add a partner"
            className="h-11 px-[30px] grid place-items-center bg-accent text-white text-base font-bold rounded-lg cursor-pointer"
            onClick={() =>
              setPartners((prev) => [...prev, { address: "", tokens: 1 }])
            }
          />
        </div>
      </div>
    </div>
  );
}
