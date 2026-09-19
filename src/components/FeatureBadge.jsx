import React from "react";

/**
 * Reusable small feature card used in the strip below the Hero section
 * e.g. "100% Handmade", "Custom Orders", "Perfect for Gifting", "Safe & Secure"
 */
export default function FeatureBadge({ icon, title, subtitle, bgColor = "bg-softpink" }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-11 h-11 rounded-full flex items-center justify-center text-lg ${bgColor}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
