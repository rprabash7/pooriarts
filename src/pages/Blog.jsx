import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiCalendar,
  FiArrowRight,
  FiBookOpen,
  FiSun,
  FiTool,
} from "react-icons/fi";

const SHEET_ID = "1znGpxCzEdFiakLLRlGYx-Jm4nTeEUTMq95-r4I0Gnes";
const BLOG_TAB = "BlogPosts";
const BLOG_URL = `https://opensheet.elk.sh/${SHEET_ID}/${BLOG_TAB}`;

const blogCategories = [
  { label: "All Posts", value: "all" },
  { label: "Painting Tips", value: "painting-tips" },
  { label: "Artist Stories", value: "artist-stories" },
  { label: "DIY & Home Decor", value: "diy-home-decor" },
  { label: "Art Inspiration", value: "art-inspiration" },
  { label: "Materials & Tools", value: "materials-tools" },
  { label: "Behind the Scenes", value: "behind-the-scenes" },
];

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function normalizePost(row) {
  return {
    id: row.id?.trim(),
    title: row.title?.trim(),
    category: row.category?.trim().toLowerCase(),
    image: row.image?.trim(),
    date: row.date?.trim(),
    excerpt: row.excerpt?.trim(),
    tags: row.tags?.trim() || "",
    published: row.published?.trim().toLowerCase(),
  };
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    let active = true;

    fetch(BLOG_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Could not load posts");
        return response.json();
      })
      .then((rows) => {
        if (!active) return;
        setPosts(
          rows
            .map(normalizePost)
            .filter((post) => post.id && post.title && post.published === "yes")
        );
      })
      .catch(() => {
        if (active) setPosts([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const fullText = `${post.title} ${post.category} ${post.tags} ${post.excerpt}`.toLowerCase();

      const matchesSearch = fullText.includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, search, activeCategory]);

  const recentPosts = posts.slice(0, 4);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-4 py-12 sm:px-6 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />
        <div className="relative mx-auto max-w-7xl text-center lg:text-left">
          <p className="text-xs font-semibold tracking-[0.35em] text-gray-300">
            OUR BLOG
          </p>

          <h1 className="mt-3 font-heading text-5xl font-bold italic leading-tight sm:text-6xl">
            Art Stories &{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent">
              Inspiration
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-200 sm:text-base lg:mx-0">
            Explore painting ideas, artist stories, tips, tutorials and creative
            inspiration to bring more colors to your life.
          </p>

          <div className="mt-7 grid max-w-xl grid-cols-2 gap-4 text-xs text-gray-200 sm:grid-cols-4">
            <span><FiSun className="mb-1 text-xl text-yellow-400" />Creative<br />Ideas</span>
            <span><FiBookOpen className="mb-1 text-xl text-red-500" />Painting<br />Tips</span>
            <span><FiHeart className="mb-1 text-xl text-sky-400" />Artist<br />Stories</span>
            <span><FiTool className="mb-1 text-xl text-green-400" />Art & Home<br />Decor Ideas</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeCategory === category.value
                    ? "bg-red-600 text-white"
                    : "bg-neutral-900 text-gray-300 hover:bg-white/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 rounded-full border border-white/20 bg-neutral-900 px-4 py-2 text-sm text-gray-300">
            <FiSearch />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search blog posts..."
              className="w-full bg-transparent outline-none placeholder:text-gray-500 sm:w-56"
            />
          </label>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_330px]">
          <div>
            {loading && (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-80 animate-pulse rounded-xl bg-neutral-800"
                  />
                ))}
              </div>
            )}

            {!loading && filteredPosts.length === 0 && (
              <div className="rounded-xl border border-white/10 bg-neutral-900 p-10 text-center text-gray-300">
                No blog posts found. Add posts to the
                <strong className="mx-1 text-white">BlogPosts</strong>
                Google Sheet tab and set
                <strong className="ml-1 text-white">published</strong>
                to
                <strong className="ml-1 text-white">yes</strong>.
              </div>
            )}

            {!loading && filteredPosts.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />

                    <div className="p-4">
                      <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold">
                        {post.category?.replaceAll("-", " ")}
                      </span>

                      <h2 className="mt-4 text-lg font-semibold">{post.title}</h2>

                      <p className="mt-2 text-sm leading-relaxed text-gray-300">
                        {post.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <FiCalendar /> {formatDate(post.date)}
                        </span>
                        <button type="button" className="font-semibold text-red-400 hover:text-red-300">
                          Read More <FiArrowRight className="inline" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-5">
            <div className="rounded-xl border border-white/10 bg-neutral-900 p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Recent Posts</h2>
                <span className="text-xs text-gray-400">Latest</span>
              </div>

              <div className="mt-4 space-y-4">
                {recentPosts.length === 0 ? (
                  <p className="text-sm text-gray-400">No posts yet.</p>
                ) : (
                  recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img
                        src={post.image}
                        alt=""
                        className="h-14 w-14 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold leading-snug">
                          {post.title}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-neutral-900 p-5">
              <h2 className="text-lg font-semibold">Popular Tags</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Painting Tips",
                  "Acrylic Colors",
                  "Home Decor",
                  "Krishna Painting",
                  "Nature Art",
                  "Portraits",
                  "Art Inspiration",
                  "DIY",
                ].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSearch(tag)}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs text-gray-300 hover:border-yellow-400 hover:text-yellow-400"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-5">
              <h2 className="font-heading text-2xl font-bold italic text-yellow-400">
                Get Art Inspiration in Your Inbox
              </h2>
              <p className="mt-2 text-sm text-gray-300">
                Subscribe to get latest art ideas, tips and updates.
              </p>

              <form
                className="mt-4 flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (email) {
                    alert("Thank you for subscribing!");
                    setEmail("");
                  }
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm text-white outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold hover:bg-red-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}