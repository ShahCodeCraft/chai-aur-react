import React, { useState } from "react";

function Login() {
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    city: "Delhi",
    stock: false,
  });
  const [showDetails, setShowDetails] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setProductDetails({
      ...productDetails,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const registerClick = () => {
    setShowDetails(true);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-4 p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Register Product
      </button>

      {showDetails && (
        <div className="mt-3">
          <h3 className="text-lg font-semibold">Product Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Name:</strong> {productDetails.name}
            </div>
            <div>
              <strong>Price:</strong> {productDetails.price}
            </div>
            <div>
              <strong>Shipped To:</strong> {productDetails.city}
            </div>
            <div>
              <strong>Stock:</strong>{" "}
              {productDetails.stock ? "Available" : "Out of Stock"}
            </div>
          </div>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mt-2"
            onClick={() => setIsModalOpen(true)}
          >
            Edit
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="bg-white rounded-lg p-6 shadow-lg z-50">
            <h2 className="text-xl font-bold mb-4">Register Product</h2>
            <form>
              {["name", "price"].map((field) => (
                <div className="mb-4" key={field}>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor={field}
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    id={field}
                    className="w-full px-3 py-2 border rounded"
                    type="text"
                    value={productDetails[field]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="city"
                >
                  Shipped To
                </label>
                <select
                  id="city"
                  className="w-full px-3 py-2 border rounded"
                  value={productDetails.city}
                  onChange={handleInputChange}
                >
                  <option value="Delhi">Delhi</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    id="stock"
                    className="mr-2"
                    type="checkbox"
                    checked={productDetails.stock}
                    onChange={handleInputChange}
                  />{" "}
                  Available
                </label>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={registerClick}
                >
                  Register
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
