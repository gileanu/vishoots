import React from "react";

const currnetYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="py-4">
        <p className="text-md">{currnetYear} - viShoots</p>
        <p className="text-xs">
          <a
            href="https://github.com/gileanu"
            className="hover:underline text-xs"
            target="_blank"
          >
            RR - github.com/gileanu
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
