import React, { useState } from "react";

const CartPage = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Product 1",
      price: 25,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Product 2",
      price: 40,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      </div>
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
        {/* Cart Items List */}
        <div className="lg:w-3/4 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">₵{item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-gray-200 px-3 py-1 rounded">-</button>
                <span>{item.quantity}</span>
                <button className="bg-gray-200 px-3 py-1 rounded">+</button>
              </div>
              <div className="text-lg font-semibold">
                ₵{item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/4 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="text-lg">Subtotal:</span>
            <span className="font-semibold">₵{calculateTotal()}</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-lg">Shipping:</span>
            <span className="font-semibold">₵10</span>
          </div>
          <div className="flex justify-between mb-6">
            <span className="text-lg">Total:</span>
            <span className="font-semibold text-xl">
              ₵{calculateTotal() + 10}
            </span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg ">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
