import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
const DayList = () => {
  const days = useFetch('http://localhost:3001/days');

  return (
    <ul>
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DayList;
