import React from "react";
import "./App.css";
import ProductList from "./components/products/ProductList";
import CountryList from "./components/countries/CountryList";

function App() {
  return (
    <div className="App">
      <h1> React assignment2</h1>
      <ProductList />
      <CountryList />
    </div>
  );
}

export default App;
