import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiStar, FiUsers, FiGift, FiShield, FiTarget } from "react-icons/fi";
import { GiPalette } from "react-icons/gi";

import aboutHero from "../assets/about-hero.png";
import aboutJourney from "../assets/about-journey.png";

export default function About() {
  const stats = [
    { icon: <GiPalette />, value: "500+", label: "Artworks Created", color: "text-yellow-400" },
    { icon: <FiUsers />, value: "1000+", label: "Happy Customers", color: "text-red-500" },
    { icon: <FiHeart />, value: "10+", label: "Art Categories", color: "text-blue-400" },
    { icon: <FiStar />, value: "100%", label: "Passion & Creativity", color: "text-yellow-400" },
  ];

  const benefits = [
    { icon: <FiStar />, title: "Unique & Original", text: "Handmade artworks with a personal touch.", color: "text-yellow-400" },
    { icon: <FiShield />, title: "High Quality", text: "Premium materials and vibrant colours.", color: "text-green-400" },
    { icon: <FiUsers />, title: "Customer Support", text: "We are here to help you with your order.", color: "text-sky-400" },
    { icon: <FiGift />, title: "Custom Orders", text: "Get personalized artwork as per your need.", color: "text-pink-400" },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative border-b border-white/10 px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: `url(${aboutHero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />
        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-300 sm:text-sm">
            <Link to="/" className="hover:text-white">Home</Link><span className="mx-2">›</span><span>About Us</span>
          </nav>

          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold tracking-[0.35em] text-gray-300">OUR STORY</p>
              <h1 className="mt-3 font-heading text-5xl font-bold italic leading-tight sm:text-6xl lg:text-7xl">
                About <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent">Poori Arts</span>
              </h1>
              <p className="mt-2 font-heading text-2xl italic text-white sm:text-3xl">Art Brings Colors to Life —</p>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-200 sm:text-base lg:mx-0">
                At Poori Arts, we believe art is more than just colors on canvas — it is a way to express emotions, spread positivity and make life brighter. We create and curate unique artworks that inspire, decorate and connect people.
              </p>
            </div>
            <img src={aboutHero} alt="Poori Arts handmade artwork" className="mx-auto w-full max-w-lg rounded-2xl object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-4 py-7 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`flex items-center justify-center gap-3 text-center sm:text-left ${index > 0 ? "sm:border-l sm:border-white/20" : ""}`}>
              <span className={`text-3xl ${stat.color}`}>{stat.icon}</span>
              <span><strong className="block text-lg">{stat.value}</strong><span className="text-xs text-gray-300 sm:text-sm">{stat.label}</span></span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center">
        <img src={aboutJourney} alt="Poori Arts creative journey" className="w-full rounded-2xl object-cover" />
        <div>
          <p className="text-xs font-semibold tracking-[0.35em] text-gray-300">OUR JOURNEY</p>
          <h2 className="mt-3 font-heading text-4xl font-bold italic leading-tight sm:text-5xl">From <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent">Passion to Poori Arts</span></h2>
          <p className="mt-5 text-sm leading-relaxed text-gray-200 sm:text-base">
            What started as a simple love for art has now grown into Poori Arts — a platform to share creativity with the world. We focus on handmade paintings, custom artworks and creative products that add beauty and positivity to your space.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-200 sm:text-base">Every artwork we create is crafted with dedication, attention to detail and love for art.</p>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            <div><GiPalette className="text-3xl text-green-400" /><h3 className="mt-2 font-semibold">Our Vision</h3><p className="mt-1 text-xs leading-relaxed text-gray-300">To make art a part of every home and heart.</p></div>
            <div><FiTarget className="text-3xl text-red-500" /><h3 className="mt-2 font-semibold">Our Mission</h3><p className="mt-1 text-xs leading-relaxed text-gray-300">To create, inspire and spread positivity through art.</p></div>
            <div><FiUsers className="text-3xl text-purple-400" /><h3 className="mt-2 font-semibold">Our Values</h3><p className="mt-1 text-xs leading-relaxed text-gray-300">Creativity, quality and customer happiness.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-neutral-950 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[230px_1fr] lg:items-center">
            <h2 className="font-heading text-4xl font-bold italic leading-tight sm:text-5xl">Why Choose<br /><span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">Poori Arts?</span></h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <span className={`text-3xl ${benefit.color}`}>{benefit.icon}</span>
                  <h3 className="mt-3 font-semibold">{benefit.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-300">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
