import { Link } from "react-router-dom";
import logo from '../img/logo.png';

const Header = () => {
    return (
        <>
            <header>
                <img src={logo} alt="logo"></img>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/cv">Mon CV</Link>
                    </li>
                    <li>
                        <Link to="/quiz">Quiz</Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;