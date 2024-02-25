import React, { useState, useEffect } from "react";

const Sidebar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    const checkActiveLink = () => {
      const links = document.querySelectorAll(".sidebar ul li a");
      links.forEach((link) => {
        if (window.location.href.includes(link.getAttribute("href") || "")) {
          setActiveLink(link.getAttribute("href") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    checkActiveLink();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`sidebar ${isScrolled ? "scrolled" : ""}`}>
      <ul>
        <li><a href="/" className={activeLink === "/" ? "active" : ""}>Home</a></li>
        <li><a href="/projects" className={activeLink === "/projects" ? "active" : ""}>Projects</a></li>
        <li><a href="/contact" className={activeLink === "/contact" ? "active" : ""}>Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
