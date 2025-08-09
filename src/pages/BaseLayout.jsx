import React, { useState } from 'react';
import PageFrame from '../layout/containers/PageFrame';
import ProfileSidebar from '../components/sidebar/ProfileSidebar';
import Card from '../layout/containers/Card';
import ComponentDemo from './ComponentDemo';


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
      <>
      
      <Card>
        <h1>Main Content Area</h1>

        <button onClick={() => setSidebarOpen(true)} style={{ padding: '8px 16px', fontSize: 16 }}>
          Open Profile Sidebar
        </button>
      </Card>

      <ComponentDemo setSidebarOpen={setSidebarOpen} />

      </>
    </PageFrame>
  );
}
