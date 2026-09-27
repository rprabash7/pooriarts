import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMessageCircle,
  FiPhone,
  FiMail,
  FiMapPin,
  FiHeart,
  FiTruck,
  FiSend,
  FiChevronDown,
  FiCheckCircle,
} from "react-icons/fi";

const WHATSAPP_NUMBER = "916300280561";
const PHONE_NUMBER = "916300280561";
const EMAIL = "itsurpooriarts@gmail.com";
const MAP_QUERY = "Poori Arts Studio, Gudupalli, Andhra Pradesh, India";

const faqs = [
  { question: "Do you take custom painting orders?", answer: "Yes. Share your reference photo and requirement through WhatsApp or the custom order page." },
  { question: "How long does it take to complete an order?", answer: "Time depends on artwork size and customization. Please contact us for an estimated delivery date." },
  { question: "Do you deliver locally?", answer: "Please contact us with your location and artwork requirement to confirm available delivery options." },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Hello Poori Arts,%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ASubject: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-4 py-12 sm:px-6 sm:py-16">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40" />
        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-xs text-gray-300 sm:text-sm"><Link to="/" className="hover:text-white">Home</Link><span className="mx-2">›</span><span>Contact</span></nav>
          <div className="mt-9 max-w-3xl text-center lg:text-left">
            <p className="text-xs font-semibold tracking-[0.35em] text-gray-300">CONTACT US</p>
            <h1 className="mt-3 font-heading text-5xl font-bold italic leading-tight sm:text-6xl">Get in <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">Touch</span></h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-200 sm:text-base">Have a question, custom order request or just want to say hello? We would love to hear from you!</p>
            <div className="mt-7 grid max-w-xl grid-cols-2 gap-4 text-xs text-gray-200 sm:grid-cols-4"><span>🎨 Custom<br />Orders</span><span><FiHeart className="mb-1 text-xl text-red-500" />Art<br />Suggestions</span><span><FiTruck className="mb-1 text-xl text-sky-400" />Local<br />Delivery</span><span><FiMessageCircle className="mb-1 text-xl text-green-400" />Quick<br />Response</span></div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-[330px_1fr_360px]">
        <aside className="rounded-xl border border-white/10 bg-neutral-950 p-5">
          <h2 className="text-xl font-bold">Contact Information</h2>
          <span className="mt-2 block w-16 border-t-2 border-red-500" />
          <div className="mt-5 space-y-3">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl bg-white/5 p-4 hover:bg-white/10"><FiMessageCircle className="text-3xl text-green-400" /><span><strong className="block">Chat on WhatsApp</strong><small className="text-gray-400">Get quick response</small></span></a>
            <a href={`tel:+${PHONE_NUMBER}`} className="flex items-center gap-4 rounded-xl bg-white/5 p-4 hover:bg-white/10"><FiPhone className="text-3xl text-blue-400" /><span><strong className="block">Call Us</strong><small className="text-gray-400">+91 63002 80561</small></span></a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-xl bg-white/5 p-4 hover:bg-white/10"><FiMail className="text-3xl text-red-400" /><span><strong className="block">Email Us</strong><small className="text-gray-400">{EMAIL}</small></span></a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-xl bg-white/5 p-4 hover:bg-white/10"><FiMapPin className="text-3xl text-orange-400" /><span><strong className="block">Our Address</strong><small className="text-gray-400">Kuppam, Andhra Pradesh, India</small></span></a>
          </div>
        </aside>

        <section className="rounded-xl border border-white/10 bg-neutral-950 p-5 sm:p-6">
          <h2 className="text-xl font-bold">Send Us a Message</h2>
          <span className="mt-2 block w-16 border-t-2 border-red-500" />
          {sent && <p className="mt-4 rounded-lg bg-green-500/15 p-3 text-sm text-green-300">WhatsApp is opening with your message. Please tap Send in WhatsApp to contact Poori Arts.</p>}
          <form onSubmit={handleSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-sm">Your Name <span className="text-red-400">*</span><input required name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-red-500" /></label>
            <label className="text-sm">Your Email <span className="text-red-400">*</span><input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-red-500" /></label>
            <label className="text-sm">Phone Number<input name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-red-500" /></label>
            <label className="text-sm">Subject <span className="text-red-400">*</span><select required name="subject" value={form.subject} onChange={handleChange} className="mt-2 w-full rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-red-500"><option value="">Select a subject</option><option>Custom Order</option><option>Product Enquiry</option><option>Delivery Enquiry</option><option>General Question</option></select></label>
            <label className="text-sm sm:col-span-2">Your Message <span className="text-red-400">*</span><textarea required name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your requirement..." className="mt-2 w-full resize-none rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-white outline-none focus:border-red-500" /></label>
            <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold hover:bg-red-700 sm:col-span-2"><FiSend /> Send Message</button>
          </form>
        </section>

        <aside className="space-y-5">
          <div className="rounded-xl border border-white/10 bg-neutral-950 p-4"><h2 className="text-lg font-bold">Find Us on Map</h2><span className="mt-2 block w-16 border-t-2 border-red-500" /><iframe title="Poori Arts location" className="mt-4 h-48 w-full rounded-lg border-0" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`} /></div>
          <div className="rounded-xl border border-white/10 bg-neutral-950 p-4"><h2 className="text-lg font-bold">Frequently Asked Questions</h2><span className="mt-2 block w-16 border-t-2 border-red-500" /><div className="mt-3 divide-y divide-white/10">{faqs.map((faq, index) => <div key={faq.question}><button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-3 py-3 text-left text-sm font-medium"><span>{faq.question}</span><FiChevronDown className={openFaq === index ? "rotate-180 transition" : "transition"} /></button>{openFaq === index && <p className="pb-3 text-sm leading-relaxed text-gray-300">{faq.answer}</p>}</div>)}</div></div>
        </aside>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 pb-10 text-center text-xs text-gray-200 sm:grid-cols-4 sm:px-6 sm:text-sm"><span className="rounded-xl border border-white/10 p-4"><FiTruck className="mx-auto mb-2 text-2xl text-yellow-400" />Local Delivery Available</span><span className="rounded-xl border border-white/10 p-4"><FiCheckCircle className="mx-auto mb-2 text-2xl text-yellow-400" />Safe & Secure Communication</span><span className="rounded-xl border border-white/10 p-4"><FiHeart className="mx-auto mb-2 text-2xl text-red-500" />Dedicated Customer Support</span><span className="rounded-xl border border-white/10 p-4">🎨<br />Let's Create Something Beautiful Together</span></section>
    </main>
  );
}
