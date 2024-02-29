import React from "react";
import Container from "./page-container";

const currnetYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white border-t h-16">
      <Container>
        <div className="mx-auto py-5">
          <p className="test-xs text-black">
            &copy; {currnetYear} [name], [rights] - [terms] [conditions].
          </p>
          <p className="text-xs text-gray-500">
            <a href="https://github.com/gileanu">RR - github.com/gileanu</a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
