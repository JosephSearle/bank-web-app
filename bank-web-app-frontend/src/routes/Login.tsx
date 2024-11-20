import { useState, FormEvent } from "react";
import LoginIllustration from "../resources/login-illustration.png";
import './Login.css';
import Button from "../components/button/Button";
import "@fontsource/roboto/500.css";

function Login() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Implement your login logic here
        console.log('Login attempt:', credentials.email);
    };

    const handleChange = (e: any) => {
        setCredentials(e.target.value);
    }

    return (
        <div className="Login">
            <div>
                <img id="Login-Illustration" src={LoginIllustration} alt="login illustration"/>
            </div>
            <div id="Login-Form">
                <div id="Login-Form-Title">
                    <img src="figma_bank_icon.png" alt="Logo" />
                    <h1>Login</h1>
                </div>
                <form id="Login-Form-Content" onSubmit={handleSubmit}>
                    <input
                        type="email" // Changed to email type for better validation
                        id="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                        autoComplete="email" // Added for better UX
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your password"
                    />
                    <Button title="Login" />
                    <a id="Signup-Link" href="/sign-up">Signup</a>
                </form>
            </div>
        </div>
    );
}

export default Login;