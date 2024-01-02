import "./Nav.css"
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Nav () {
    return (
        <nav>
            <ul>
                <NavLink to="/">
                    <Logo />
                </NavLink>
            </ul>
            <ul className="menu">
                <NavLink to="/aboutme">About me</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </nav>
    )
}

export default Nav