import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyTickets from './pages/MyTickets/MyTickets';
import './App.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/mytickets" element={<MyTickets />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
