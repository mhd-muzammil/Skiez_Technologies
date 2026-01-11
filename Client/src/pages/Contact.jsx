import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Message sent successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 overflow-hidden">
      {/* HERO */}
      <section className="relative">
        {/* Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-slate-700/20 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">
              Let’s build something
              <span className="block text-slate-300">together</span>
            </h1>

            <p className="mt-4 text-slate-400 max-w-md">
              Have an idea, project, or collaboration in mind? Our team is ready
              to help you design, build, and scale.
            </p>

            {/* QUICK CONTACT */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm">
                📧 hrskiezdigital@gmail.com
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm">
                📞 +91 9994401291
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm">
                📍 Chennai, India
              </div>
            </div>
          </motion.div>

          {/* VECTOR IMAGE */}
          <motion.img
            src="https://www.svgrepo.com/show/331724/contact-us.svg"
            alt="Contact illustration"
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      </section>



      {/* FORM + MAP */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/70 backdrop-blur border border-slate-700 rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>

            <form onSubmit={submit} className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-slate-500"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-slate-500"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:ring-2 focus:ring-slate-500"
              />

              <button
                type="submit"
                className="w-full py-2.5 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-white transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-slate-700"
          >
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=Chennai&output=embed"
              className="w-full h-full min-h-[320px] grayscale invert"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SKIEZ DIGITAL
      </footer>
    </main>
  );
}
  
