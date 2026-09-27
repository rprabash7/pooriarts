/* ============================================================
   src/services/sheetProducts.js
   ============================================================
   Fetches product data live from a Google Sheet using the free
   "opensheet" API (no backend, no API key needed).

   ⚠️ SETUP — do this before using this file:
   1. Replace SHEET_ID below with your real Google Sheet ID
      (the long string in your sheet's URL, between /d/ and /edit).
   2. Replace TAB_NAME with your sheet's tab name at the bottom
      (default is usually "Sheet1"). Spaces in the tab name should
      be written with a "+" — e.g. "Sheet 1" -> "Sheet+1".
   3. Your Google Sheet must be shared as
      "Anyone with the link" -> Viewer (see Share button in Sheets).
   ============================================================ */

const SHEET_ID = "1znGpxCzEdFiakLLRlGYx-Jm4nTeEUTMq95-r4I0Gnes";
const TAB_NAME = "Sheet1";

const SHEET_URL = `https://opensheet.elk.sh/${SHEET_ID}/${TAB_NAME}`;

// Google Sheets gives every value as text, so numbers need converting.
function normalizeRow(row) {
  return {
    id: row.id?.trim(),
    title: row.title?.trim(),
    price: Number(row.price) || 0,
    category: row.category?.trim().toLowerCase(),
    image: row.image?.trim(),
    rating: Number(row.rating) || 0,
    reviews: Number(row.reviews) || 0,
    size: row.size?.trim().toLowerCase() || "",
    style: row.style?.trim().toLowerCase() || "",
    gallery: row.gallery?.trim().toLowerCase() || "no",
  };
}

export async function fetchProductsFromSheet() {
  const res = await fetch(SHEET_URL);
  if (!res.ok) {
    throw new Error(`Could not load products from Google Sheet (status ${res.status})`);
  }
  const rows = await res.json();
  return rows
    .filter((row) => row.id && row.title) // skip blank/incomplete rows
    .map(normalizeRow);
}
