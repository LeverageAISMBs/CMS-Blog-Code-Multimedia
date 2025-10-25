import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

const AdminLayout: React.FC = () => {
  const { logout } = useAuth();
  
  const activeLinkClass = 'bg-primary text-primary-foreground';
  const inactiveLinkClass = 'text-muted-foreground hover:text-foreground';

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="#/admin" className="flex items-center gap-2 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
                <rect width="256" height="256" fill="none"></rect>
                <path d="M48,216a24,24,0,0,1-19.9-39.2L123.3,46.5a24,24,0,0,1,41.4,0l95.2,130.3A24,24,0,0,1,208,216Z" opacity="0.2"></path>
                <path d="M48,216a24,24,0,0,1-19.9-39.2L123.3,46.5a24,24,0,0,1,41.4,0l95.2,130.3A24,24,0,0,1,208,216Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
              </svg>
              <span>Kibo CMS</span>
            </a>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/admin/codebase"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                Codebase
              </NavLink>
              <NavLink
                to="/admin/editor"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                Multimedia Editor
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
            {/* Can add a search bar here if needed */}
          </div>
          <Button variant="ghost" onClick={logout}>Logout</Button>
        </header>
        <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="py-8">
                 <Outlet />
            </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;