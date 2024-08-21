// import React, { useState, useEffect } from "react";

// const FetchApi = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
//       setProducts(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Product Table</h1>
//       <table className="min-w-full border-collapse border border-gray-200">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 px-4 py-2">ID</th>
//             <th className="border border-gray-300 px-4 py-2">Title</th>
//             <th className="border border-gray-300 px-4 py-2">Price</th>
//             <th className="border border-gray-300 px-4 py-2">Category</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td className="border border-gray-300 px-4 py-2">{product.id}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {product.title}
//               </td>
//               <td className="border border-gray-300 px-4 py-2">
//                 ${product.price}
//               </td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {product.category}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default FetchApi;

import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  });
  return (
    <>
      <h1>Fetch API Data</h1>
      <table>
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-3">Product ID</th>
            <th className="border border-gray-300 px-4 py-3">Product Name</th>
            <th className="border border-gray-300 px-4 py-3">Product Price</th>
            <th className="border border-gray-300 px-4 py-3">
              Product Category
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-3">{product.id}</td>
              <td className="border border-gray-300 px-4 py-3">
                {product.title}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                {product.price}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                {product.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default FetchApi;
