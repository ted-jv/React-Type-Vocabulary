import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from 'pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import DayWordsPage from 'pages/DayWordsPage';
import CreateWordPage from 'pages/CreateWordPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/day/:day" element={<DayWordsPage />}></Route>
          <Route path="/create_word" element={<CreateWordPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
