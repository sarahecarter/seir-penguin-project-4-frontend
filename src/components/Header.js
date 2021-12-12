import { Link } from "react-router-dom"
import { useState } from "react"

const Header = () => {

    // Hamburger menu functionality created using this tutorial as a resource:
    // https://ibaslogic.com/how-to-add-hamburger-menu-in-react/

    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggle = () => {
        menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)
    }



    return <header>
        <Link to="/">
            <h1>Flashcards</h1>
        </Link>
        <i class="fas fa-bars" onClick={() => handleToggle()}></i>
        <nav className={`${menuOpen ? "showMenu" : ""}`}>
            <ul>
                <Link to="/">
                    <li>Cards</li>
                </Link>
                <Link to="/study">
                    <li>Study</li>
                </Link>
            </ul>
        </nav>
    </header>
}

export default Header