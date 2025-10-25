import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kibo Inc. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/" className="text-sm hover:underline">
              Home
            </Link>
            <Link to="/about" className="text-sm hover:underline">
              About Us
            </Link>
            <Link to="/services" className="text-sm hover:underline">
              Services
            </Link>
            <Link to="/blog" className="text-sm hover:underline">
              Blog
            </Link>
             <Link to="/faq" className="text-sm hover:underline">
              FAQ
            </Link>
            <Link to="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;