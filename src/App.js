import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import Home from './pages/Home';
import ContactList from './pages/ContactList';
import AddContact from './pages/AddContact';
import ContactDetail from './pages/ContactDetail';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios.get('/data/contacts.json', { signal: controller.signal })
      .then(res => { setContacts(res.data); setLoading(false); })
      .catch(err => { if (!axios.isCancel(err)) { setError('Không tải được dữ liệu'); setLoading(false); } });
    return () => controller.abort();
  }, []);

  const addContact = (newContact) => {
    const nextId = contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1;
    setContacts([...contacts, { ...newContact, id: nextId, favorite: false }]);
  };
  const deleteContact = (id) => setContacts(contacts.filter(c => c.id !== id));
  const toggleFavorite = (id) => setContacts(contacts.map(c => c.id === id ? { ...c, favorite: !c.favorite } : c));

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<ContactList contacts={contacts} onDelete={deleteContact} onToggleFav={toggleFavorite} />} />
        <Route path="contacts/new" element={<AddContact onAdd={addContact} />} />
        <Route path="contacts/:id" element={<ContactDetail contacts={contacts} />} />
      </Route>
    </Routes>
  );
};

export default App;