//import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import ProductGrid from "./ProductGrid";
// import "../styles/ProductPage.css";

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data);
//         setLoading(false);
//       });
//   }, []);

//   const handleFilterChange = (category, isChecked) => {
//     if (isChecked) {
//       setFilteredProducts(products.filter((p) => p.category === category));
//     } else {
//       setFilteredProducts(products);
//     }
//   };

//   const handleSortChange = (sortType) => {
//     const sortedProducts = [...filteredProducts];
//     if (sortType === "price-low") {
//       sortedProducts.sort((a, b) => a.price - b.price);
//     } else if (sortType === "price-high") {
//       sortedProducts.sort((a, b) => b.price - a.price);
//     }
//     setFilteredProducts(sortedProducts);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="page-heading">
//         <h2>Discover the product: Fashion, Beauty with a Great Range</h2>
//       </div>
//       <div className="product-page">
//         <Sidebar
//           totalItems={filteredProducts.length}
//           onFilterChange={handleFilterChange}
//         />
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <ProductGrid
//             products={filteredProducts}
//             onSortChange={handleSortChange}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";

import "../styles/ProductPage.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from FakeStoreAPI
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initially show all products
      });
  }, []);

  // Handle filtering products
  const handleFilterChange = (category, isChecked) => {
    let filtered = [...products];

    if (category === "all") {
      filtered = isChecked ? products : [];
    } else {
      filtered = filtered.filter(
        (product) =>
          (isChecked && product.category.toLowerCase() === category) ||
          (!isChecked && product.category.toLowerCase() !== category)
      );
    }

    setFilteredProducts(filtered);
  };

  // Handle sorting products
  const handleSortChange = (sortOption) => {
    let sortedProducts = [...filteredProducts];

    switch (sortOption) {
      case "newest":
        sortedProducts = sortedProducts.sort(
          (a, b) => new Date(b.date) - new Date(a.date) // Sorting by date
        );
        break;
      case "popular":
        // Sorting by popularity (implement based on your logic)
        // For now, just assume a random sort for demonstration
        sortedProducts = sortedProducts.sort(() => Math.random() - 0.5);
        break;
      case "price-high":
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "price-low":
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="product-page">
      <div className="main-content">
        <Sidebar products={products} onFilterChange={handleFilterChange} />
        <ProductGrid
          products={filteredProducts}
          onSortChange={handleSortChange}
        />
      </div>
    </div>
  );
};

export default ProductPage;
