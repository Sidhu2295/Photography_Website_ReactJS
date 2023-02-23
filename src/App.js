import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home.js';
import About from './components/pages/about.js';
import Gallery from './components/pages/gallery.js';
import Contact from './components/pages/contact.js';
import BWGallery from './components/pages/gallery-bw.js';
import CGallery from './components/pages/gallery-c.js';


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/gallery/black-white' element={<BWGallery />} />
                <Route path='/gallery/coloured' element={<CGallery />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
