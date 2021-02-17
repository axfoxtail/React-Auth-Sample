import React from "react";
import {Nav} from 'react-bootstrap';

function Leftbar() {
  return (
    <div className="leftbar">
      <Nav className="col-md-12 d-none d-md-block bg-dark sidebar"
        activeKey="/admin/dashboard"
        onSelect={selectedKey => {if(selectedKey === 'link') alert(`selected ${selectedKey}`)}}
        >
          <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/users">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/admin/settings" disabled>Settings</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Leftbar;