"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast"; // ✅ Toast import

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // ✅ show loading toast
    const toastId = toast.loading("Sending your message…");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        toast.success("Message sent successfully! 🎉", { id: toastId });
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        toast.error("Something went wrong. Please try again 😢", {
          id: toastId,
        });
      }
    );
  };

  return (
    <div className="w-full min-h-screen font-sans text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500 via-slate-900 to-slate-500"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cloudy-day.png')] opacity-10"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-300 rounded-t-full z-10"></div>
        <img
          src="/src/assets/flamingo.png"
          alt="Flamingo"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] md:w-[350px] z-20 object-contain"
        />
        <h1 className="text-white text-5xl md:text-7xl font-bold z-30">
          Let’s have a talk
        </h1>
      </section>

      {/* Bottom Section */}
      <section className="flex flex-col md:flex-row w-full">
        {/* Map */}
        <div className="w-full md:w-1/3 h-[420px] md:h-auto flex">
          <iframe
            title="Skiez Technologies Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.254693386756!2d80.00480307428212!3d12.675498221302535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fc27ea82ab43%3A0x881f8239a8d025af!2sSkiez%20Technologies%20India%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1768193287643!5m2!1sen!2sin"
            className="w-full h-full grayscale brightness-[90%] border-0 block"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Meet Us */}
        <div className="w-full md:w-1/3 bg-white flex flex-col justify-center p-10">
          <h2 className="text-2xl font-semibold mb-8">Meet us</h2>
          <ul className="space-y-4 text-[15px]">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-teal-500" />
              +91 82200 43041
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-teal-500" />
              info@skiezdigital.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-teal-500" />
              Chengalpattu / Chennai, Tamil Nadu, India
            </li>
          </ul>
        </div>

        {/* Pitch Us — Contact Form */}
        <div className="w-full md:w-1/3 bg-gray-100 flex flex-col justify-center p-10">
          <h2 className="text-2xl font-semibold mb-8">Pitch us</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />

            <input
              type="email"
              name="email"
              placeholder="Your e-mail"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-900"
            ></textarea>

            <button
              type="submit"
              className="bg-slate-700 hover:bg-slate-900 transition text-white font-semibold px-8 py-2 rounded-full"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
