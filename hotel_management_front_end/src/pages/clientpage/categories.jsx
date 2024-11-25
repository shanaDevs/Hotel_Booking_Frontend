import axios from "axios";
import { useState, useEffect } from "react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [categoriesIsLoaded, setCategoriesLoaded] = useState(false);

  useEffect(() => {
    if (!categoriesIsLoaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/category")
        .then((res) => {
          setCategories(res.data.categories);
          setCategoriesLoaded(true);
        });
    }
  }, [categoriesIsLoaded]);

  function deleteItem(name) {
    axios
      .delete(import.meta.env.VITE_BACKEND_URL+"api/category/"+name)
      .then(() => {
        setCategoriesLoaded(false);
      });
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Available Rooms
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="p-4 border-b">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Price (per night)</th>
              <th className="p-4">Features</th>
              <th className="p-4">Description</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr
                key={category.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="p-4">{category.name}</td>
                <td className="p-4">${category.price}</td>
                <td className="p-4">{category.features.join(", ")}</td>
                <td className="p-4">{category.description}</td>
                <td className="p-4">
                  <button
                    onClick={() => deleteItem(category.name)}
                    className="bg-red-500 text-white py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
