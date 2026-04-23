import { useState, useEffect } from 'react';
import Img1 from './assets/Img1.jpg';
import Img2 from './assets/Img2.jpg';
import Img3 from './assets/Img3.png';
import Google from './assets/google.svg';
import Apple from './assets/apple.svg';
import AmuLogo from './assets/amu-logo.svg';
import EyeIcon from './assets/eye.svg';
import EyeOffIcon from './assets/eye-off.svg';
import { Link } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

const slides = [Img1, Img2, Img3];

function Auth() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showPassword, setShowPassword] = useState(false);

    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse);
            navigate('/dashboard');
        },
        onError: error => console.log(error),
    });

    // Auto-slide every 4 seconds
    useEffect(function () {
        var timer = setInterval(function () {
            setCurrentSlide(function (prev) {
                return (prev + 1) % slides.length;
            });
        }, 4000);

        return function () {
            clearInterval(timer);
        };
    }, []); 

    return (
        <section className="auth-container">
            <div className="auth-card">

                {/* LEFT SIDE */}
                <div className="auth-left">

                    {/* Top Bar */}
                    <div className="auth-top">
                        <img src={AmuLogo} alt="AMU Logo" className="auth-logo" />

                        <Link to="/" className="back-link">
                            Back to website →
                        </Link>
                    </div>

                    {/* Image Slider */}
                    <div className="auth-image-box">
                        {slides.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="background"
                                className={`auth-image ${index === currentSlide ? 'active' : ''}`}
                            />
                        ))}

                        <div className="auth-overlay">
                            <h3>
                                Capturing Moments,<br />
                                Creating Memories
                            </h3>

                            <div className="auth-dots">
                                {slides.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`auth-dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(index)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="auth-right">

                    <h1>Create an account</h1>
                    <p>
                        Already have an account?{" "}
                        <Link to="/Login">
                            <a href="#">Log in</a>
                        </Link>
                    </p>

                    {/* Name fields */}
                    <div className="auth-row">
                        <input type="text" placeholder="First Name" className="auth-input" />
                        <input type="text" placeholder="Last name" className="auth-input" />
                    </div>

                    {/* Other inputs */}
                    <input type="email" placeholder="Email" className="auth-input" />

                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="auth-input"
                        />
                        <span
                            className="eye-icon"
                            onClick={function () {
                                setShowPassword(!showPassword);
                            }}
                        >
                            <img
                                src={showPassword ? EyeOffIcon : EyeIcon}
                                alt="toggle password"
                            />
                        </span>
                    </div>

                    {/* Checkbox */}
                    <label className="auth-check">
                        <input type="checkbox" defaultChecked />
                        <span>
                            I agree to the{" "}
                            <a href="#">Terms & Conditions</a>
                        </span>
                    </label>

                    {/* Button */}
                    <button className="auth-btn">
                        Create account
                    </button>

                    {/* Divider */}
                    <div className="auth-divider">
                        <span></span>
                        <p>Or register with</p>
                        <span></span>
                    </div>

                    {/* Social buttons */}
                    <div className="auth-social">
                        <button onClick={googleLogin}>
                            <img src={Google} alt="Google" />
                            Google
                        </button>
                        <button>
                            <img src={Apple} alt="Apple" />
                            Apple
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Auth;