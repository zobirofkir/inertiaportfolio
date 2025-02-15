import { useState } from "react";

const CategoryComponent = ({categories}) => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="bg-transparent dark:bg-transparent text-gray-900 dark:text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-500 transform hover:scale-110 hover:rotate-3d ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 className="text-xl font-semibold text-center">{category.title}</h3>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className="mt-6 text-center md:text-left">
          <h3 className="text-2xl font-semibold">Selected Category:</h3>
          <p className="text-lg text-blue-500 dark:text-purple-400">
            {categories.find((cat) => cat.id === selectedCategory).title}
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryComponent;
