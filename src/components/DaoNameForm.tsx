import React from "react";

interface IDaoNameForm {
  newDao: {
    name: string;
    symbol: string;
  };
  setNewDao: React.Dispatch<
    React.SetStateAction<{
      name: string;
      symbol: string;
    }>
  >;
}

export default function DaoNameForm({newDao, setNewDao}: IDaoNameForm) {
  return (
    <div className="mt-10">
      <div className="text-lg">Name your DAO</div>
      <div className="mt-5">
        <label htmlFor="">DAO name</label>
        <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
          <input
            type="text"
            className="border-none bg-transparent outline-none"
            placeholder="Enter your DAO name"
            value={newDao.name}
            onChange={(e) =>
              setNewDao((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="mt-3">
          <label htmlFor="">DAO symbol</label>
          <div className="mt-3 bg-[rgba(208,220,245,0.08)] py-2 px-3 rounded-md">
            <input
              type="text"
              className="border-none bg-transparent outline-none"
              placeholder="Enter your DAO symbol"
              value={newDao.symbol}
              onChange={(e) =>
                setNewDao((prev) => ({
                  ...prev,
                  symbol: e.target.value.toUpperCase(),
                }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
