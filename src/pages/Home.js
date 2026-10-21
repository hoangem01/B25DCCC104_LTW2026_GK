import React from 'react';

const Home = ({ contacts }) => {
  const total = contacts.length;
  // Bắt buộc dùng reduce cho ít nhất 1 con số theo yêu cầu nâng cao[cite: 6]
  const favoriteCount = contacts.reduce((acc, contact) => contact.favorite ? acc + 1 : acc, 0);
  const gmailCount = contacts.filter(c => c.email.endsWith('@gmail.com')).length;

  return (
    <div>
      <h1>Danh bạ</h1>
      <div>
        <p>Tổng số liên hệ: {total}</p>
        <p>Số liên hệ yêu thích: {favoriteCount}</p>
        <p>Số liên hệ dùng Gmail: {gmailCount}</p>
      </div>
    </div>
  );
};

export default Home;