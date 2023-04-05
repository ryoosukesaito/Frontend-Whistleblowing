import React from "react";
import { categoryData } from "../../data/dataExample";

function CategoryList() {
  return (
    <div className="flex flex-col w-1/3">
      {categoryData.map((data, idx) => (
        <div
          className="flex flex-row items-start justify-between my-3"
          key={idx}
        >
          <div>{data}</div>
          <div>
            <button
              className="rounded-full bg-gray-400 text-sm w-5 h-5 px-1"
              key={idx}
            >
              -
            </button>
          </div>
        </div>
      ))}
      <div>
        <input
          type="text"
          className="border rounded  text-gray-700 pl-2"
          placeholder="New Category"
        />
        <button className="rounded border ml-2 px-2 bg-neutral-400">+</button>
      </div>
    </div>
  );
}

export default CategoryList;
