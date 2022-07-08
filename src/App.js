import Nav from './components/nav-bar/nav'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/home/home'
import Podcast from './components/podcast/podcast';

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter >
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/podcast" element={<Podcast />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
