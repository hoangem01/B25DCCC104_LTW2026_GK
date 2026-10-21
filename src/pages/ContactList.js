import React from 'react';
import ContactTable from '../components/ContactTable';

const ContactList = ({ contacts, onDelete, onToggleFav }) => {
  return (
    <div>
      <h2>Danh sách liên hệ</h2>
      <ContactTable contacts={contacts} onDelete={onDelete} onToggleFav={onToggleFav} />
    </div>
  );
};

export default ContactList;