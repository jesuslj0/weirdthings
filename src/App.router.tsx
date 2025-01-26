import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { ReactNode } from 'react';
import Home from './pages/Home';
import About from './Components/About';
import RandomDrawings from './pages/RandomDrawings';
import Portraits from './pages/Portraits';
import Arquitecture from './pages/Arquitecture';

interface Props {
    children: ReactNode;
}

export const Router = ({ children }: Props) => {

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/random-drawings" element={<RandomDrawings />} />
            <Route path="/portraits" element={<Portraits />} />
            <Route path="/arquitecture" element={<Arquitecture />} />
          </Routes>
          {children}
        </BrowserRouter>
    )
}