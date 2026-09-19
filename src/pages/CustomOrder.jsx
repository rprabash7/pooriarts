import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { submitCustomOrder } from "../services/api.js";

export default function CustomOrder() {
  const [form, setForm] = useState({ name: "", phone: "", occasion: "", notes: "", file: null });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitCustomOrder(form);
    setSubmitted(true);
  };

  return (
    <section className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-2">Order Your Custom Art</h1>
      <p className="text-gray-500 mb-8">Upload your photo, tell us the occasion, and we'll turn it into art.</p>

      {submitted ? (
        <div className="bg-softgreen p-6 rounded-xl text-green-700">
          Thank you! Your custom order request has been received. We'll reach out on WhatsApp shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-2xl shadow-sm">
          <input name="name" placeholder="Your Name" required onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-pink-400" />
          <input name="phone" placeholder="WhatsApp / Phone Number" required onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-pink-400" />
          <select name="occasion" onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-pink-400">
            <option value="">Select Occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Festival</option>
            <option>Just Because</option>
          </select>
          <textarea name="notes" placeholder="Describe what you'd like (art type, colors, size, message on card)"
            rows={4} onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-pink-400" />

          <label className="flex items-center gap-3 border border-dashed border-gray-300 rounded-lg px-4 py-6 cursor-pointer justify-center text-gray-500 hover:border-pink-400">
            <FiUploadCloud size={20} />
            <span>{form.file ? form.file.name : "Upload your reference photo"}</span>
            <input type="file" name="file" onChange={handleChange} className="hidden" accept="image/*" />
          </label>

          <button type="submit" className="btn-primary w-full justify-center">Submit Custom Order</button>
        </form>
      )}
    </section>
  );
}
