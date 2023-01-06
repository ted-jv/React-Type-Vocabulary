import React, { useState } from 'react';

const Word = ({ word }) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  const toggleDone = () => {
    setIsDone(!isDone);
  };
  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" onChange={toggleDone} />
      </td>
      <td>{isShow && word.kor}</td>
      <td>{word.eng}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? '뜻 숨기기' : '뜻 보기'}</button>
        <button>삭제</button>
      </td>
    </tr>
  );
};

export default Word;
