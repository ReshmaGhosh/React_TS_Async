import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
};

const url = "https:api.escuelajs.co/api/v1/products";

export default function ProductList(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);

  function fetchData() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }
  console.log(products);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
