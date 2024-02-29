import React from "react";
import Container from "./page-container";

const currnetYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t h-16">
      <Container>
        <div className="mx-auto py-5">
          <p className="test-xs ">&copy; {currnetYear} viShoots</p>
          <p className="text-xs text-gray-500">
            <a href="https://github.com/gileanu" target="_blank">
              RR - github.com/gileanu
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
