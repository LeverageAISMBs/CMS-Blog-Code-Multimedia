
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './ui/Button';

const Nav: React.FC = () => {
  const activeLinkClass = 'bg-primary text-primary-foreground';
  const inactiveLinkClass = 'text-muted-foreground hover:text-foreground';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
              <rect width="256" height="256" fill="none"></rect>
              <path d="M48,216a24,24,0,0,1-19.9-39.2L123.3,46.5a24,24,0,0,1,41.4,0l95.2,130.3A24,24,0,0,1,208,216Z" opacity="0.2"></path>
              <path d="M48,216a24,24,0,0,1-19.9-39.2L123.3,46.5a24,24,0,0,1,41.4,0l95.2,130.3A24,24,0,0,1,208,216Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
            </svg>
            <span className="hidden font-bold sm:inline-block">Kibo CMS</span>
          </a>
          <nav className="flex items-center gap-4 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors px-3 py-2 rounded-md text-sm font-medium ${isActive ? activeLinkClass : inactiveLinkClass}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/codebase"
              className={({ isActive }) =>
                `transition-colors px-3 py-2 rounded-md text-sm font-medium ${isActive ? activeLinkClass : inactiveLinkClass}`
              }
            >
              Codebase
            </NavLink>
            <NavLink
              to="/editor"
              className={({ isActive }) =>
                `transition-colors px-3 py-2 rounded-md text-sm font-medium ${isActive ? activeLinkClass : inactiveLinkClass}`
              }
            >
              Multimedia Editor
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center">
            <Button variant="outline" size="sm" asChild>
                <a href="#/home" target="_blank" rel="noopener noreferrer">View Site</a>
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Nav;