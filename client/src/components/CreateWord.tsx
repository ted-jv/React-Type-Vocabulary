import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { IDays } from './DayList';

const CreateWord = () => {
  const days: IDays[] = useFetch('http://localhost:3001/days');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (engRef.current && korRef.current && dayRef.current && !isLoading) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch(`http://localhost:3001/words/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      }).then(res => {
        if (res.ok) {
          alert('생성 완료 되었습니다');
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    } else {
      console.info('모두 값을 입력하셔야 합니다');
    }
  }

  const engRef = useRef<HTMLInputElement>(null);
  const korRef = useRef<HTMLInputElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="english" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="한국어" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => {
            return (
              <option value={day.day} key={day.id}>
                {day.day}
              </option>
            );
          })}
        </select>
      </div>
      <button>{isLoading ? 'Loading...' : '저장'}</button>
    </form>
  );
};

export default CreateWord;

//!isLoading request 연속 누름 방지 (원리 위에 코드 보고 확인 할 것)
