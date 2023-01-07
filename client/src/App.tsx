import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateWord from './components/CreateWord';
import Day from './components/Day';
import DayList from './components/DayList';
import Header from './components/Header';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />}></Route>
          <Route path="/day/:day" element={<Day />}></Route>
          <Route path="/create_word" element={<CreateWord />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
