import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { MenuCloseIcon, MenuOpenIcon } from "./Icons";
import TopNav from "./TopNav/TopNav";
import logo from '../../assets/logo.png'

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <div>
            <TopNav />
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <span className="bounce-animation">
                            <img src={logo} alt="" style={{ width: "150px" }} />
                        </span>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                to="/home-internet"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home Internet
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/sme-internet"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                SME Internet
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/bill-pay"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Bill Pay
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/support"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Support
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/self-care-login"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Self Care Login
                            </NavLink>
                        </li>

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>

                        {click ? (
                            <span className="icon">
                                <MenuCloseIcon />{" "}
                            </span>
                        ) : (
                            <span className="icon">
                                <MenuOpenIcon />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
