import React from "react";
import PillNav from "./ui/PillNav";
import logo from "../assets/Skiez-Tech.png";

const Header = () => {
  return (
    <div>
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "About", href: "/about" },
          { label: "Career", href: "/careers" },
          { label: "Contact", href: "/contact   " },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </div>
  );
};

export default Header;
