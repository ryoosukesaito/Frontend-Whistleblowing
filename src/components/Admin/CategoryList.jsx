import React, { useContext, useEffect } from "react";

import { AppContext } from "../../context/appContext";
import { SERVER_URL } from "../../constants/constants";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { MinusCircleIcon } from "@heroicons/react/24/outline";

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
    <div className="flex flex-col mt-5 ml-20 h-full text-center w-1/2">
      {categories.map((data, idx) => (
        <div
          className="flex flex-row items-center mb-7 text-xl"
          key={data._id}
        >
          <button
            className="items-center mr-6"
            value={data._id}
            onClick={deleteCategory}
          >
            <MinusCircleIcon className="w-8 h-8 text-gray-scale-1"/>
          </button>
          <div className="">{data.name}</div>
          
          
        </div>
        
      ))}
      <div>
        <form onSubmit={handleAddCategory} className="flex flex-row mt-5 items-center">
        <button
            className="items-center mr-6"
            type="submit"
          >
            <PlusCircleIcon className="w-8 h-8 text-gray-scale-2"/>
          </button>
          <input
            type="text"
            className="border border-gray-scale-3 text-gray-scale-1 pl-2 py-1 text-lg "
            placeholder="New category"
            onChange={(e) => setNewCategory(e.target.value)}
            value={newCategory}
          />
          
        </form>
      </div>
    </div>
  );
}

export default CategoryList;
