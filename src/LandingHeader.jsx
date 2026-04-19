import Logo from './assets/Logo.png';

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
                <button className="SignIn">Sign In</button>
                <button className="GetStarted">Get Started</button>
            </div>

        </header>
    );
}

export default Header;