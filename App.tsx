
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

import CodebasePage from './pages/CodebasePage';
import EditorPage from './pages/EditorPage';

import PublicHomePage from './pages/PublicHomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';


function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <div className="min-h-screen bg-background font-sans text-foreground">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="codebase" element={<CodebasePage />} />
              <Route path="editor" element={<EditorPage />} />
            </Route>

            {/* Public-Facing Site Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<PublicHomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;