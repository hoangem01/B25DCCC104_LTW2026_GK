import React from 'react';
import { GROUPS } from '../data';

const FilterBar = ({ search, onSearchChange, group, onGroupChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="search">Tìm kiếm: </label>
      <input 
        id="search" 
        type="text" 
        value={search} 
        onChange={(e) => onSearchChange(e.target.value)} 
        placeholder="Theo tên hoặc SĐT..." 
      />
      <label htmlFor="group" style={{ marginLeft: '15px' }}>Nhóm: </label>
      <select id="group" value={group} onChange={(e) => onGroupChange(e.target.value)}>
        <option value="Tất cả">Tất cả</option>
        {GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
      </select>
    </div>
  );
};

export default FilterBar;