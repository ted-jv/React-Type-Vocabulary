import React, { useState } from 'react';

const Word = ({ word }) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const toggleDone = () => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
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
