import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyTickets from './pages/MyTickets/MyTickets';
import './global.scss';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/notfound';

function App() {
  return (
    <BrowserRouter>
      <Header />
   
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/mytickets" element={<MyTickets />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/notfound" element={() => ( <NotFound /> )}	/> */}
        </Routes>

    </BrowserRouter>
  );
}

export default App;
