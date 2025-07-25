import React, { useState } from 'react';
import PageFrame from '../layout/containers/PageFrame';
import ProfileSidebar from '../components/sidebar/ProfileSidebar';


export default function BaseLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <PageFrame
      topbar={
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, width: '100%' }}>
          <span style={{ fontWeight: 600 }}>Taf’Yaa</span>
          <nav style={{ marginLeft: 'auto', display: 'flex', gap: 12 }}>
            <a href="#tree" style={{ color: '#fff' }}>Tree View</a>
            <a href="#members" style={{ color: '#fff' }}>Members</a>
            <a href="#export" style={{ color: '#fff' }}>Export</a>
          </nav>
        </div>
      }
      sidebar={<ProfileSidebar onClose={() => setSidebarOpen(false)} />}
      sidebarOpen={sidebarOpen}
      onSidebarClose={() => setSidebarOpen(false)}
      footer={
        <div style={{ textAlign: 'center', width: '100%' }}>
          © {new Date().getFullYear()} Taf’Yaa · All rights reserved
        </div>
      }
      footerInsideMain={true}
    >
      <div>
        <h1>Main Content Area</h1>
        <p>
          This is the main content. Click the button below to open the profile sidebar.
        </p>
        <button onClick={() => setSidebarOpen(true)} style={{ padding: '8px 16px', fontSize: 16 }}>
          Open Profile Sidebar
        </button>
        {sidebarOpen && (
          <button onClick={() => setSidebarOpen(false)} style={{ padding: '8px 16px', fontSize: 16, marginLeft: 16 }}>
            Close Profile Sidebar
          </button>
        )}
        <div style={{ height: 1200, background: '#f3f4f6', borderRadius: 8, padding: 16, marginTop: 32 }}>
          Long content block for scrolling demo…
        </div>
      </div>
    </PageFrame>
  );
}
