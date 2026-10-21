import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} style={{ marginRight: '15px' }}>Trang chủ</NavLink>
      <NavLink to="/contacts" end className={({ isActive }) => isActive ? 'active' : ''} style={{ marginRight: '15px' }}>Danh sách</NavLink>
      <NavLink to="/contacts/new" end className={({ isActive }) => isActive ? 'active' : ''}>Thêm mới</NavLink>
    </nav>
  );
};

export default NavBar;