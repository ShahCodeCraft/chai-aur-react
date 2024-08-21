// App.js
import React, { useState, useEffect } from "react";
import LoaderSpinner from "./LoaderSpinner";
import "./LoaderSpinner.css";

const LoaderContent = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate a data fetch
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });

    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoaderSpinner loading={loading} />
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LoaderContent;
