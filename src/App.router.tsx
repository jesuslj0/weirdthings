import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { ReactNode } from 'react';
import Home from './pages/Home';
import RandomDrawings from './pages/RandomDrawings';
import Portraits from './pages/Portraits';
import Arquitecture from './pages/Arquitecture';
import { Contact } from './pages/Contact';
import About from './pages/About';

interface Props {
    children: ReactNode;
}

export const Router = ({ children }: Props) => {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About />} />
            <Route path="/random-drawings" element={<RandomDrawings />} />
            <Route path="/portraits" element={<Portraits />} />
            <Route path="/arquitecture" element={<Arquitecture />} />
          </Routes>
          {children}
        </BrowserRouter>
    )
}