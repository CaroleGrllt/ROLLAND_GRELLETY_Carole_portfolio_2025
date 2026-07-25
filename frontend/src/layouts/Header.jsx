import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import Icons from '../assets/img/icons/icon'
import Button from '../components/Button'
import Logo from '../assets/img/logo/logo.png'

export default function Header() {
    const [open, setOpen] = useState(false)
    const closeMenu = () => setOpen(false)

    return (
        <header>
            <nav>
                <Link to="/" onClick={closeMenu} className="logo-link">
                    <img src={Logo} alt="Logo" />
                </Link>
                {/* desktop */}
                <ul className="nav-links">
                    <li>
                        <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `main-nav-item ${isActive ? "is-active" : ""}`
                        }
                        >
                            ACCUEIL
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                        to="/projets"
                        className={({ isActive }) =>
                            `main-nav-item ${isActive ? "is-active" : ""}`
                        }
                        >
                            PROJETS
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                        to="/competences"
                        className={({ isActive }) =>
                            `main-nav-item ${isActive ? "is-active" : ""}`
                        }
                        >
                            COMPETENCES
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                        to="/formations"
                        className={({ isActive }) =>
                            `main-nav-item ${isActive ? "is-active" : ""}`
                        }
                        >
                            FORMATIONS
                        </NavLink>
                    </li>
                </ul> 
                <div className="navbar-btn">
                    <Button 
                        title='ME CONTACTER'
                        linkTo='/contact'
                        variant='header'
                    />
                </div>
                {/* Bouton hamburger mobile */}
                <button
                    type="button"
                    className={`nav-toggle ${open ? "is-open" : ""}`}
                    aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-controls="mobile-drawer"
                    aria-expanded={open}
                    onClick={() => setOpen((value) => !value)}
                >
                    <Icons
                        name={open ? "close" : "burger"}
                        className={open ? "close-burger-menu" : "burger-menu"}
                        aria-hidden="true"
                        focusable="false"
                    />
                </button>
                {open && (
                    <button
                        type="button"
                        className="mobile-overlay"
                        aria-label="Fermer le menu"
                        onClick={closeMenu}
                    />
                )}
                {/* Mobile */}
                <div id="mobile-drawer" className={`mobile-drawer ${open ? "is-open" : ""}`} role="menu">
                    <ul className="mobile-links">
                        <li>
                        <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => `main-nav-item ${isActive ? "is-active" : ""}`}>
                            ACCUEIL
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/projets" onClick={closeMenu} className={({ isActive }) => `main-nav-item ${isActive ? "is-active" : ""}`}>
                            PROJETS
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/competences" onClick={closeMenu} className={({ isActive }) => `main-nav-item ${isActive ? "is-active" : ""}`}>
                            COMPETENCES
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/formations" onClick={closeMenu} className={({ isActive }) => `main-nav-item ${isActive ? "is-active" : ""}`}>
                            FORMATIONS
                        </NavLink>
                        </li>
                    </ul>

                    <div className="mobile-cta">
                        <Button title="ME CONTACTER" linkTo="/contact" variant="header" />
                    </div>
                </div>
                {/* overlay pour fermer en cliquant dehors */}
            </nav>
        </header>
    )
}