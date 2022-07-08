import Nav from './components/nav-bar/nav'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/home/home'
import Podcast from './components/podcast/podcast';
import Clips from './components/clips/clips';
import Articles from './components/articles/articles';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter >
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/podcast" element={<Podcast />}/>
      <Route exact path="/clips" element={<Clips />}/>
      <Route exact path="/articles" element={<Articles />}/>
      <Route exact path="/contact" element={<Contact />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
