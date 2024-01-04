import "./Nav.css"
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

function Nav () {
    return (
        <nav>
            <ul>
                <NavLink to="/">
                    <Logo className={"logo-container"}/>
                </NavLink>
            </ul>
            <ul className="menu">
                <NavLink to="/aboutme">About me</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/coming-soon"></NavLink>
            </ul>
        </nav>
    )
}

export default Nav