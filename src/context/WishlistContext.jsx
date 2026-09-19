import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) return prev.filter((p) => p.id !== item.id);
      return [...prev, item];
    });
  };

  const isWishlisted = (id) => wishlist.some((p) => p.id === id);
  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted, wishlistCount }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
