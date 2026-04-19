import Monitor from './assets/monitor.svg';
import Percent from './assets/payments.svg';
import Truck from './assets/truck.svg';

function LandingBottomPart() {

    return (
        <section>
            <div>
                <img src={Monitor} alt="Monitor Image" />
                <b>Instant Web & App</b>
                Start selling today
            </div>
            <div>
                <img src={Percent} alt="Percentage Image" />
                <b>Integrated Payments</b>
                &lt;1% transaction fee
            </div>
            <div>
                <img src={Truck} alt="Truck Image" />
                <b>Integrated global delivery and logistics</b>
                Live tracking
            </div>
        </section>
    );
}

export default LandingBottomPart;