// import React from 'react';
// import { FiSearch, FiCalendar, FiZap, FiFilter, FiShare2, FiPlus } from 'react-icons/fi';

// const Header: React.FC = () => {
//   return (
//     <header>
//       <h1>Good morning, Joe!</h1>
//       <div className="feature-cards">
//         <div className="feature-card">
//           <img src="/introducing-tags.png" alt="Introducing tags" />
//           <h3>Introducing tags</h3>
//           <p>Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.</p>
//         </div>
//         <div className="feature-card">
//           <img src="/share-notes.png" alt="Share Notes Instantly" />
//           <h3>Share Notes Instantly</h3>
//           <p>Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.</p>
//         </div>
//         <div className="feature-card">
//           <img src="/access-anywhere.png" alt="Access Anywhere" />
//           <h3>Access Anywhere</h3>
//           <p>Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.</p>
//         </div>
//       </div>
//       <div className="search-bar">
//         <div className="search-input">
//           <FiSearch />
//           <input type="text" placeholder="Search" />
//         </div>
//         <button><FiCalendar /> Calendar view</button>
//         <button><FiZap /> Automation</button>
//         <button><FiFilter /> Filter</button>
//         <button><FiShare2 /> Share</button>
//         <button className="create-new-btn"><FiPlus /> Create new</button>

//       </div>
//     </header>
//   );
// };

// export default Header;








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