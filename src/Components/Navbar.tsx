import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <div id="navbar-container">
            <button
                id="hamburger"
                className={open ? "open" : ""}
                onClick={() => setOpen(prev => !prev)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav id="navbar" className={open ? "nav-open" : ""}>
                <ul>
                    <li><NavLink to="/" end onClick={close}>Home</NavLink></li>
                    <li><NavLink to="/random-drawings" onClick={close}>Random Drawings</NavLink></li>
                    <li><NavLink to="/portraits" onClick={close}>Portraits</NavLink></li>
                    <li><NavLink to="/arquitecture" onClick={close}>Arquitecture</NavLink></li>
                    <li><NavLink to="/contact" onClick={close}>Contact</NavLink></li>
                    <li><NavLink to="/about" onClick={close}>About</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};
