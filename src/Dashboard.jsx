import { Link } from "react-router-dom";
import Logo from './assets/Logo.png';
import DashboardHero from './DashboardHero';
import DashboardRightBar from './DashboardRightBar';
import IconDashboard from './assets/icon-dashboard.svg';
import IconContacts from './assets/icon-contacts.svg';
import IconFeatures from './assets/icon-features.svg';
import IconLibrary from './assets/icon-library.svg';
import IconBaseWallet from './assets/icon-base-wallet.svg';
import IconInvoices from './assets/icon-invoices.svg';
import IconSchedules from './assets/icon-schedules.svg';
import IconArrowRight from './assets/icon-arrow-right.svg';

function Dashboard() {

    const mainNav = [
        { name: "Dashboard", icon: IconDashboard, active: true },
        { name: "Transactions", icon: IconContacts },
        { name: "Contacts", icon: IconContacts },
        { name: "Features", icon: IconFeatures },
        { name: "Library", icon: IconLibrary },
    ];

    const settingsNav = [
        { name: "Base Wallet", icon: IconBaseWallet },
        { name: "My Contacts", icon: IconContacts },
        { name: "Invoices", icon: IconInvoices },
        { name: "Schedules", icon: IconSchedules },
    ];

    return (
        <div className="dashboard-wrapper">

            {/* ===== SIDEBAR ===== */}
            <aside className="dash-sidebar">

                {/* Logo */}
                <div className="dash-sidebar-logo">
                    <img src={Logo} alt="Logo" />
                    <h2>PickSell</h2>
                </div>

                {/* Main Navigation */}
                <div className="dash-sidebar-section">
                    <h4>Main Navigation</h4>
                    {mainNav.map((item, i) => (
                        <div
                            key={i}
                            className={`dash-nav-item ${item.active ? 'active' : ''}`}
                        >
                            <span className="dash-nav-left">
                                <img src={item.icon} alt={item.name} />
                                {item.name}
                            </span>
                            <span className="dash-nav-chevron">›</span>
                        </div>
                    ))}
                </div>

                {/* Settings & Schedules */}
                <div className="dash-sidebar-section">
                    <h4>Settings & Schedules</h4>
                    {settingsNav.map((item, i) => (
                        <div key={i} className="dash-nav-item">
                            <span className="dash-nav-left">
                                <img src={item.icon} alt={item.name} />
                                {item.name}
                            </span>
                            <span className="dash-nav-chevron">›</span>
                        </div>
                    ))}
                </div>

            </aside>

            {/* ===== MAIN CONTENT ===== */}
            <div className="dash-main">
                <DashboardHero />

                {/* Transaction sections */}
                <div className="dash-content-bottom">
                    <DashboardRightBar />
                </div>
            </div>

        </div>
    );
}

export default Dashboard;