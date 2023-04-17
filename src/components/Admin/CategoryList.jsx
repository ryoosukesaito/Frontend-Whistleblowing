import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";

function CategoryList() {
  const { categories, setCategories } = useContext(AppContext);

  useEffect(() => {
    getCategories();
  }, []);

  function getCategories() {
    fetch(`${SERVER_URL}/api/admin/category/all`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }

  return (
    <div className="flex flex-col w-1/3">
      {categories.map((data, idx) => (
        <div
          className="flex flex-row items-start justify-between my-3"
          key={data._id}
        >
          <div>{data.name}</div>
          <div>
            <button
              className="rounded-full bg-gray-400 text-sm w-5 h-5 px-1"
              key={data._id}
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
