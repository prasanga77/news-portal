import React from 'react';

// Main Layout Component
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <LayoutHeader />
      <div className="layout-body">
        <LayoutSidebar />
        <LayoutContent>{children}</LayoutContent>
      </div>
    </div>
  );
};

// Header Component
const LayoutHeader = () => {
  return (
    <header className="layout-header">
      <h1>App Header</h1>
    </header>
  );
};

// Sidebar Component
const LayoutSidebar = () => {
  return (
    <aside className="layout-sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Tasks</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

// Content Component
const LayoutContent = ({ children }) => {
  return (
    <main className="layout-content">
      {children}
    </main>
  );
};

export { Layout, LayoutHeader, LayoutSidebar, LayoutContent };
