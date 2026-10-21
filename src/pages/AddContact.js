import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GROUPS } from '../data';

const AddContact = ({ onAdd }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', group: 'Bạn bè' });
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.group) {
      setErrorMsg('Vui lòng nhập đầy đủ thông tin phía dưới form');
      return;
    }
    onAdd(formData);
    navigate('/contacts', { replace: true });
  };

  return (
    <div>
      <h2>Thêm liên hệ mới</h2>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <div><label htmlFor="name">Họ tên: </label><input type="text" id="name" value={formData.name} onChange={handleChange} /></div>
        <div><label htmlFor="phone">Số điện thoại: </label><input type="text" id="phone" value={formData.phone} onChange={handleChange} /></div>
        <div><label htmlFor="email">Email: </label><input type="text" id="email" value={formData.email} onChange={handleChange} /></div>
        <div>
          <label htmlFor="group">Nhóm: </label>
          <select id="group" value={formData.group} onChange={handleChange}>
            {GROUPS.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default AddContact;