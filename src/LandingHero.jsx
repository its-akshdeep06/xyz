import LandingImage from './assets/LandImg.png';

function LandingHero() {

    return (
        <section>
            <img src={LandingImage} alt="Landing Image" />
            <h1><b>The hassle-free platform to sell globally for less</b> </h1>
            <p>Connect your bank account and start selling to the world today!</p>
            <button className="GetStarted">Get Started</button>
            <button className="BookDemo">Book a Demo</button>
        </section>
    );
}

export default LandingHero;