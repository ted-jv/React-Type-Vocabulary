import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">영어 단어집</Link>
      </h1>
      <div className="menu">
        <button>단어 추가</button>
        <button>Day 추가</button>
      </div>
    </div>
  );
};

export default Header;
