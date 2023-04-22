import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";

function CategoryList() {
  const { categories, setCategories, newCategory, setNewCategory } =
    useContext(AppContext);

  useEffect(() => {
    getCategories();
  }, [categories]);

  function getCategories() {
    fetch(`${SERVER_URL}/api/admin/category/all`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }

  function deleteCategory(e) {
    const categoryId = e.target.value;
    fetch(`${SERVER_URL}/api/admin/category/delete/:id`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: categoryId,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    getCategories();
  }

  function handleAddCategory(e) {
    e.preventDefault();
    fetch(`${SERVER_URL}/api/admin/create/category`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newCategory,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
    getCategories();
    setNewCategory("");
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
              value={data._id}
              onClick={deleteCategory}
            >
              -
            </button>
          </div>
        </div>
      ))}
      <div>
        <form onSubmit={handleAddCategory}>
          <input
            type="text"
            className="border rounded  text-gray-700 pl-2"
            placeholder="New Category"
            onChange={(e) => setNewCategory(e.target.value)}
            value={newCategory}
          />
          <button
            className="rounded border ml-2 px-2 bg-neutral-400"
            type="submit"
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
}

export default CategoryList;
