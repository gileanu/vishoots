import React from "react";
import Container from "./page-container";
import GalleryContainer from "./gallery-container";

const currnetYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="h-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto py-2 max-w-5xl">
        <p className="test-xs ">&copy; {currnetYear} viShoots</p>
        <p className="text-xs text-gray-500">
          <a href="https://github.com/gileanu" target="_blank">
            RR - github.com/gileanu
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
