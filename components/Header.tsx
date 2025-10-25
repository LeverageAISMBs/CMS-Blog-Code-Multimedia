import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from './ui/Button';

const Header: React.FC = () => {
  const activeLinkClass = 'text-primary';
  const inactiveLinkClass = 'text-muted-foreground hover:text-primary';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
              <rect width="256" height="256" fill="none"></rect>
              <path d="M48,216a24,24,0,0,1-19.9-39.2L123.3,46.5a24,24,0,0,1,41.4,0l95.2,130.3A24,24,0,0,1,208,216Z" opacity="0.2"></path>
              <path d="M48,216a24,24,0,0,1-19.9-39.2L123.3,46.5a24,24,0,0,1,41.4,0l95.2,130.3A24,24,0,0,1,208,216Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
            </svg>
          <span className="font-bold">Kibo Inc.</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
           <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors ${isActive ? activeLinkClass : inactiveLinkClass}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors ${isActive ? activeLinkClass : inactiveLinkClass}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `transition-colors ${isActive ? activeLinkClass : inactiveLinkClass}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `transition-colors ${isActive ? activeLinkClass : inactiveLinkClass}`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `transition-colors ${isActive ? activeLinkClass : inactiveLinkClass}`
            }
          >
            FAQ
          </NavLink>
        </nav>
        <div className="hidden md:block">
            <Button asChild>
                <Link to="/admin/login">Admin Login</Link>
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;