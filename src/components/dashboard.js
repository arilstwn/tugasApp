import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    return (
        <div style={{maxWidth: "960px", margin: "0 auto", padding: "20px"}}>
            <h1 style={{fontSize: "24px", marginBottom: "24px", }}>Admin Dashboard</h1>
            <nav style={{listStyleType: "none", padding: "0"}}>
                <ul>
                    <li>
                        <Link to="/admin/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/admin/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">Orders</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AdminDashboard;
