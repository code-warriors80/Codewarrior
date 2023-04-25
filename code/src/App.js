import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './Routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
