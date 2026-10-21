import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find(c => c.id === Number(id));

  if (!contact) return <div><p>Không tìm thấy liên hệ</p><button onClick={() => navigate(-1)}>Quay lại</button></div>;

  return (
    <div>
      <h2>Chi tiết liên hệ</h2>
      <p>Họ tên: {contact.name}</p>
      <p>Số điện thoại: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Nhóm: {contact.group}</p>
      <p>Yêu thích: {contact.favorite ? 'Có' : 'Không'}</p>
      <br />
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default ContactDetail;