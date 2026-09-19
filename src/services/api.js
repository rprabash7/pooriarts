/* ============================================================
   services/api.js — Backend connectivity logic
   ============================================================
   Ippudu real backend (Django/Node) ready lekapothe, ee functions
   MOCK data tho pani chestayi, so app run avutundi without error.

   Mee backend ready ayyaka:
   1. BASE_URL ni mee real backend URL tho update cheyandi
      (e.g. "https://your-backend.onrender.com/api").
   2. Prathi function లో unna "MOCK VERSION" block ni comment
      chesi, "REAL VERSION" (fetch) block ni uncomment cheyandi.
   ============================================================ */

const BASE_URL = "https://your-backend-domain.com/api"; // <-- replace later

// ---------------- FETCH ALL PRODUCTS (used in Shop.jsx) ----------------
export async function fetchProducts() {
  // ---- REAL VERSION (uncomment once backend is ready) ----
  // const res = await fetch(`${BASE_URL}/products/`);
  // if (!res.ok) throw new Error("Failed to fetch products");
  // return res.json();

  // ---- MOCK VERSION (temporary, so Shop page works right now) ----
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Sunset Salt Art Bottle", subtitle: "Handmade colorful sand/salt art", price: 599, image: "https://picsum.photos/seed/product1/400/400" },
        { id: 2, title: "Couple Pencil Sketch", subtitle: "Realistic hand-drawn sketch", price: 799, image: "https://picsum.photos/seed/product2/400/400" },
        { id: 3, title: "Our Story Scrapbook", subtitle: "Custom photo scrapbook", price: 999, image: "https://picsum.photos/seed/product3/400/400" },
        { id: 4, title: "Personalized Mug", subtitle: "Print your memory on a mug", price: 349, image: "https://picsum.photos/seed/product4/400/400" },
      ]);
    }, 500);
  });
}

// ---------------- SUBMIT CUSTOM ORDER FORM (used in CustomOrder.jsx) ----------------
export async function submitCustomOrder(formData) {
  // ---- REAL VERSION (uncomment once backend is ready) ----
  // const data = new FormData();
  // Object.entries(formData).forEach(([key, value]) => data.append(key, value));
  // const res = await fetch(`${BASE_URL}/custom-orders/`, { method: "POST", body: data });
  // if (!res.ok) throw new Error("Failed to submit custom order");
  // return res.json();

  // ---- MOCK VERSION (temporary, so form works right now) ----
  console.log("Custom order submitted (mock):", formData);
  return new Promise((resolve) => setTimeout(() => resolve({ success: true }), 500));
}

// ---------------- PLACE ORDER FROM CART (used later in Cart.jsx checkout) ----------------
export async function placeOrder(cartItems) {
  // ---- REAL VERSION (uncomment once backend is ready) ----
  // const res = await fetch(`${BASE_URL}/orders/`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ items: cartItems }),
  // });
  // if (!res.ok) throw new Error("Failed to place order");
  // return res.json();

  // ---- MOCK VERSION ----
  console.log("Order placed (mock):", cartItems);
  return new Promise((resolve) => setTimeout(() => resolve({ success: true, orderId: "MOCK123" }), 500));
}
