import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <h1>Good morning, Joe!</h1>
      <div className="header-actions">
        <button className="help-btn">Help & feedback</button>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header;