import { Link } from "react-router-dom";
import IconBell from './assets/icon-bell.svg';
import IconMail from './assets/icon-mail.svg';
import IconKebab from './assets/icon-kebab.svg';
import ShapeCardCurves from './assets/shape-card-curves.svg';
import RedIcon from './assets/icon-cube-red.svg';

function DashboardHero() {
    return (
        <>
            {/* ===== HEADER BAR ===== */}
            <header className="dash-header">

                {/* Search */}
                <div className="dash-search">
                    <span className="dash-search-icon"></span>
                    <input type="text" placeholder="Search.." />
                </div>

                {/* Center icons */}
                <div className="dash-header-icons">
                    <img src={IconBell} alt="Notifications" />
                    <img src={IconMail} alt="Mail" />
                    <img src={IconKebab} alt="More" />
                </div>

                {/* Right side — Home + Sign In */}
                <div className="dash-header-right">
                    <Link to="/" className="dash-header-link">Home</Link>
                    <Link to="/auth" className="dash-header-signin">Sign In</Link>
                </div>

            </header>

            {/* ===== CARDS ROW ===== */}
            <div className="dash-cards-row">

                {/* Bank Card */}
                <div className="dash-card dash-card-bank">
                    <div className="card-circles">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card-label">Card Number</div>
                    <div className="card-number">9761 8468 6375 2874</div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <span>Card Holder Name</span>
                            <span>Akshdeep Singh</span>
                        </div>
                        <div className="card-info">
                            <span>Valid Thru</span>
                            <span>07/35</span>
                        </div>
                    </div>
                    <img src={ShapeCardCurves} alt="" className="card-curves" />
                </div>

                {/* Saving Status */}
                <div className="dash-card dash-card-saving">
                    <h4>Your Saving Status</h4>
                    <div className="saving-content">
                        <div className="saving-icon">
                            <img src={RedIcon} alt="Cube" />
                        </div>
                        <div>
                            <div className="saving-percent">4.28%</div>
                            <div className="saving-text">Your spending increased</div>
                        </div>
                    </div>
                </div>

                {/* Working Balance */}
                <div className="dash-card dash-card-balance">
                    <div className="balance-header">
                        <h4>Your Working Balance</h4>
                        <span className="balance-badge">Saving Account</span>
                    </div>
                    <div className="balance-amount">Rs/- 99,999,999</div>
                    <div className="balance-currency">
                        Rs/- <span>▾</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardHero;
