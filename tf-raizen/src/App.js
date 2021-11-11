import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyTickets from './pages/MyTickets/MyTickets';
import './global.scss';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/notfound';
import FormTicket from './components/FormTicket/FormTicket';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/mytickets" element={<MyTickets />} />
        <Route path="/newticket" element={<FormTicket />} />
        <Route path="/underconstruction" element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
