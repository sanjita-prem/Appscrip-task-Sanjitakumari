import React from "react";
import ProductPage from "./components/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/ProductPage.css";

function App() {
  return (
    <div className="app">
      <Header />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;
