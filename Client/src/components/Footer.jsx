import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-sm text-ink/60">
            © 2025 Skiez Technologies India Pvt Ltd. All Rights Reserved.
          </p>
          <p className="text-xs text-ink/50">
            Designed & Developed by Skiez Technologies
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-ink/70">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Contact Us", href: "/contact" },
          ].map((item) => (
            <button
              key={item.href}
              onClick={() => {
                window.location.href = item.href;
              }}
              className="hover:text-ink"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
