import "../css/Navbar.css"

export const Navbar = () => {
    return (
        <div id="navbar-container">
            <nav id="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/random-drawings">Random Drawings</a></li>
                    <li><a href="/portraits">Portraits</a></li>
                    <li><a href="/buildings">Buildings</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </div>
    )
}