import React from "react";

interface IQuorumSettingForm {
  quorum: number;
  setQuorum: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuorumSettingForm({
  quorum,
  setQuorum,
}: IQuorumSettingForm) {
  return (
    <div className="mt-10">
      <div className="text-lg">Set up a Quorum</div>
      <div className="mt-5">
        <label htmlFor="">Quorum</label>
        <div className="mt-3 py-2 rounded-md flex items-center">
          <button
            data-action="decrement"
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-8 w-12 rounded-l cursor-pointer outline-none"
            onClick={() => setQuorum((prev) => (prev === 0 ? prev : prev - 1))}
          >
            <div className="text-2xl">-</div>
          </button>
          <input
            type="number"
            min="0"
            max="100"
            disabled
            className="outline-none focus:outline-none text-center h-8 w-10 bg-gray-300 font-semibold text-md hover:text-black focus:text-black flex items-center text-gray-700"
            value={quorum}
          />
          <button
            data-action="increment"
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-8 w-12 rounded-r cursor-pointer"
            onClick={() =>
              setQuorum((prev) => (prev === 100 ? prev : prev + 1))
            }
          >
            <div className="text-2xl">+</div>
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={quorum}
            onChange={(e) => setQuorum(Number(e.target.value))}
            className="ml-5 range range-xs range-accent"
          />
        </div>
      </div>
    </div>
  );
}
