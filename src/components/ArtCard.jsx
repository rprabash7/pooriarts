import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

/**
 * Used in CategoryGrid — image on top, title, subtitle,
 * and a "View Collection" pill button below.
 */
export default function ArtCard({ image, title, subtitle, link = "/shop" }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
      <div className="h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        <Link
          to={link}
          className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 border border-gray-200 rounded-full px-4 py-2 mt-4 hover:border-pink-400 hover:text-pink-500 transition"
        >
          View Collection <FiArrowRight />
        </Link>
      </div>
    </div>
  );
}
