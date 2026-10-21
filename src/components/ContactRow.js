import React from 'react';
import { Link } from 'react-router-dom';

const ContactRow = ({ contact, onDelete, onToggleFav }) => {
  return (
    <tr className={contact.favorite ? 'row-favorite' : 'row-normal'}>
      <td><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>{contact.group}</td>
      <td>
        <button onClick={() => onToggleFav(contact.id)}>{contact.favorite ? 'Bỏ yêu thích' : 'Yêu thích'}</button>
        <button onClick={() => onDelete(contact.id)} style={{ marginLeft: '5px' }}>Xóa</button>
      </td>
    </tr>
  );
};

export default ContactRow;