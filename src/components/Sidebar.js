import React, { useState, useEffect } from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ products, onFilterChange }) => {
  const [showFilter, setShowFilter] = useState(true);
  const [categories, setCategories] = useState([]);

  // Calculate categories dynamically based on the fetched products
  useEffect(() => {
    if (products && products.length > 0) {
      // Get the categories and count how many products are in each category
      const categoryCounts = products.reduce((acc, product) => {
        // Check if the category already exists in the accumulator
        if (acc[product.category]) {
          acc[product.category] += 1;
        } else {
          acc[product.category] = 1;
        }
        return acc;
      }, {});

      // Create an array of category objects
      const categoryList = Object.keys(categoryCounts).map((category) => ({
        name: category,
        count: categoryCounts[category],
      }));

      // Add "All" category as the first option
      const allCategory = { name: "All", count: products.length };
      setCategories([allCategory, ...categoryList]);
    }
  }, [products]);

  return (
    <div className="sidebar">
      <button
        className="toggle-button"
        onClick={() => setShowFilter(!showFilter)}
      >
        {showFilter ? "Hide Filter" : "Show Filter"}
      </button>
      {showFilter && (
        <div className="filters">
          <h3>Categories</h3>
          <div>
            {categories.map((category) => (
              <div key={category.name}>
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      onFilterChange(
                        category.name.toLowerCase(),
                        e.target.checked
                      )
                    }
                  />
                  {category.name} ({category.count})
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
