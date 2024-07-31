import React from 'react';
import { FiSearch, FiCalendar, FiZap, FiFilter, FiShare2, FiPlus } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Good morning, Joe!</h1>
      <div className="feature-cards">
        {/* Feature cards content remains the same */}
      </div>
      <div className="action-bar">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <button className="action-btn"><FiCalendar /> Calendar view</button>
        <button className="action-btn"><FiZap /> Automation</button>
        <button className="action-btn"><FiFilter /> Filter</button>
        <button className="action-btn"><FiShare2 /> Share</button>
        <button className="create-new-btn"><FiPlus /> Create new</button>
      </div>
    </header>
  );
};

export default Header;