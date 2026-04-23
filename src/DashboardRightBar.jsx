import IconWater from './assets/icon-water.svg';
import IconSalary from './assets/icon-salary.svg';
import IconElectric from './assets/icon-electric.svg';
import IconTransfer from './assets/icon-transfer.svg';
import Payments from './assets/payments.svg';

function DashboardRightBar() {

    const latestTransactions = [
        { name: "Payment Sent to Client", amount: "₹560.00", type: "sent" },
        { name: "Salary from AirIndia", amount: "₹12,200.00", type: "received" },
        { name: "Money Sent to Wise.com", amount: "₹3,000.00", type: "sent" },
    ];

    const latestTransactions2 = [
        { name: "Purchased Macbook Pro", amount: "₹5560.00", type: "sent" },
    ];

    const upcomingToday = [
        { name: "Water Bill", status: "Unsuccessfull", statusClass: "fail", amount: "- ₹280", amountClass: "negative", icon: IconWater, iconClass: "water" },
    ];

    const upcomingTomorrow = [
        { name: "Income: Salary Oct", status: "Successfully", statusClass: "success", amount: "+₹1200", amountClass: "positive", icon: IconSalary, iconClass: "salary" },
        { name: "Electric Bill", status: "Successfully", statusClass: "success", amount: "- ₹480", amountClass: "negative", icon: IconElectric, iconClass: "electric" },
        { name: "Income : Jane transfer", status: "Successfully", statusClass: "success", amount: "+ ₹500", amountClass: "positive", icon: IconTransfer, iconClass: "transfer" },
        { name: "Income : Jane transfer", status: "Successfully", statusClass: "success", amount: "+ ₹500", amountClass: "positive", icon: IconTransfer, iconClass: "transfer" },
    ];

    return (
        <>
            {/* ===== LATEST TRANSACTIONS ===== */}
            <div className="dash-latest">
                <div className="dash-latest-header">
                    <h3>Latest Transactions</h3>
                    <div className="header-icons">
                        <span>🔍</span>
                        <span>⚙</span>
                    </div>
                </div>

                <div className="dash-date-label">Mon, Mar 1</div>
                {latestTransactions.map((tx, i) => (
                    <div key={i} className="dash-transaction-row">
                        <div className="dash-tx-left">
                            <div className={`dash-tx-icon ${tx.type}`}>
                                <img src={Payments} alt="" style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} />
                            </div>
                            <span className="dash-tx-name">{tx.name}</span>
                        </div>
                        <span className="dash-tx-amount">{tx.amount}</span>
                    </div>
                ))}

                <div className="dash-date-label">Mon, Mar 1</div>
                {latestTransactions2.map((tx, i) => (
                    <div key={i} className="dash-transaction-row">
                        <div className="dash-tx-left">
                            <div className={`dash-tx-icon ${tx.type}`}>
                                <img src={Payments} alt="" style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} />
                            </div>
                            <span className="dash-tx-name">{tx.name}</span>
                        </div>
                        <span className="dash-tx-amount">{tx.amount}</span>
                    </div>
                ))}
            </div>

            {/* ===== UPCOMING TRANSACTIONS ===== */}
            <div className="dash-upcoming">
                <div className="dash-upcoming-header">
                    <h3>Upcoming Transactions</h3>
                    <a href="#">View All</a>
                </div>

                {/* Today */}
                <div className="dash-upcoming-label">Today</div>
                {upcomingToday.map((tx, i) => (
                    <div key={i} className="dash-upcoming-row">
                        <div className="dash-up-left">
                            <div className={`dash-up-icon ${tx.iconClass}`}>
                                <img src={tx.icon} alt={tx.name} />
                            </div>
                            <div className="dash-up-info">
                                <div className="dash-up-name">{tx.name}</div>
                                <div className={`dash-up-status ${tx.statusClass}`}>{tx.status}</div>
                            </div>
                        </div>
                        <span className={`dash-up-amount ${tx.amountClass}`}>{tx.amount}</span>
                    </div>
                ))}

                {/* Tomorrow */}
                <div className="dash-upcoming-label">Tomorrow</div>
                {upcomingTomorrow.map((tx, i) => (
                    <div key={i} className="dash-upcoming-row">
                        <div className="dash-up-left">
                            <div className={`dash-up-icon ${tx.iconClass}`}>
                                <img src={tx.icon} alt={tx.name} />
                            </div>
                            <div className="dash-up-info">
                                <div className="dash-up-name">{tx.name}</div>
                                <div className={`dash-up-status ${tx.statusClass}`}>{tx.status}</div>
                            </div>
                        </div>
                        <span className={`dash-up-amount ${tx.amountClass}`}>{tx.amount}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default DashboardRightBar;
