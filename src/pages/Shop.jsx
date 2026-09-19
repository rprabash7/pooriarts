import React, { useEffect, useState } from "react";
import ArtCard from "../components/ArtCard.jsx";
import { fetchProducts } from "../services/api.js";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="font-heading text-4xl font-bold text-gray-900 mb-8">Shop All Art</h1>

      {loading ? (
        <p className="text-gray-500">Loading products...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ArtCard key={p.id} image={p.image} title={p.title} subtitle={p.subtitle} link={`/shop/${p.id}`} />
          ))}
        </div>
      )}
    </section>
  );
}
