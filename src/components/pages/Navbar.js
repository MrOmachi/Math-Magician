import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    margin: 'auto',
  };
  const listItemStyle = {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
  };
  return (
    <div className="navigation">
      <header style={navStyles}>
        <h1>Math Magician</h1>
        <ul style={listItemStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/Quotes">Quotes</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
