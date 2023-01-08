import React, { useState } from 'react';

interface IProps {
  word: IWord;
}

export interface IWord {
  id: number;
  day: number;
  eng: string;
  kor: string;
  isDone: boolean;
}

const Word = ({ word: w }: IProps) => {
  const [word, setWord] = useState(w);
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

  const deleteWord = () => {
    if (window.confirm('삭제 하시겠습니까?'))
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE',
      }).then(res => {
        if (res.ok) {
          setWord({ ...word, id: 0 });
        }
      });
  };

  //! word.id 가 0 이면 그 데이터를 null로 바꾸겠다는 의미, data.json에서 null은 자료 삭제를 의미
  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{isShow && word.kor}</td>
      <td>{word.eng}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? '뜻 숨기기' : '뜻 보기'}</button>
        <button onClick={deleteWord}>삭제</button>
      </td>
    </tr>
  );
};

export default Word;
