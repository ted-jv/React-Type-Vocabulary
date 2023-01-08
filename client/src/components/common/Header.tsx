import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">영어 단어집</Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">
          단어 추가
        </Link>
        <Link to="/" className="link">
          Day 추가
        </Link>
      </div>
    </div>
  );
};

export default Header;
