import axios from "axios";
import { useState, useEffect } from "react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isCategoriesLoaded) {
      setLoading(true);
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/category`)
        .then((res) => {
          // Update to match the response structure
          setCategories(res.data.Categories);
          setIsCategoriesLoaded(true);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching categories:", err);
          setLoading(false);
        });
    }
  }, [isCategoriesLoaded]);

  function deleteItem(name) {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      axios
        .delete(`${import.meta.env.VITE_BACKEND_URL}/api/category/${name}`)
        .then(() => {
          setIsCategoriesLoaded(false); // Trigger reload
        })
        .catch((err) => {
          console.error("Error deleting category:", err);
          alert("Failed to delete the category. Please try again.");
        });
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-8">Available Rooms</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading categories...</p>
      ) : (
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
                  key={category._id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="p-4">
                    <img
                      src={category.Image}
                      alt={category.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="p-4">{category.name}</td>
                  <td className="p-4">${category.price / 100}</td>
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
      )}
    </div>
  );
}
