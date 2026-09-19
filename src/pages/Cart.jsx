import React from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { useCart } from "../context/CartContext.jsx";

export default function Cart() {
  const { cartItems, removeFromCart, updateQty, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-gray-900 mb-3">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-6">Explore our handmade collection and add something special.</p>
        <Link to="/shop" className="btn-primary inline-flex">Go to Shop</Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-8">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
            <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg object-cover" />
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-500">₹{item.price} x {item.qty}</p>
            </div>
            <input
              type="number"
              min={1}
              value={item.qty}
              onChange={(e) => updateQty(item.id, Number(e.target.value))}
              className="w-16 border border-gray-200 rounded-lg px-2 py-1 text-center"
            />
            <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
              <FiTrash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8 border-t border-gray-100 pt-6">
        <p className="text-lg font-semibold text-gray-800">Total: ₹{cartTotal}</p>
        <button className="btn-primary">Proceed to Checkout</button>
      </div>
    </section>
  );
}
