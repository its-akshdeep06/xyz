import Logo from './assets/Logo.png';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <h1><b>PickSell</b></h1>
            </div>

            <nav className="nav-links">
                <p>Catalogue</p>
                <p className="active">Business</p>
                <p>Shopping</p>
            </nav>

            <div className="actions">
                <Link to="/auth">
                    <button className="btn book-demo">Sign In</button>
                </Link>
                <Link to="/Dashboard">
                    <button className="btn get-started">Get Started</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;