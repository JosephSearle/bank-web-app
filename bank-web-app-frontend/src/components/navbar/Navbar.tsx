import Button from '../button/Button';
import Logo from './logo/Logo';
import "@fontsource/roboto/500.css";
import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar-Container">
                <div className="Navbar-Container-Top">
                    <div>
                        <Logo />
                    </div>
                    <div className='Navbar-Container-Top-Buttons'>
                        <Button title="Apply now" location='/sign-up'/>
                        <Button title="Log in" location='/login'/>
                    </div>
                    
                </div>
                <div className="Navbar-Container-Bottom">
                    <div className="Navbar-Container-Bottom-Left-Buttons">
                        <a href="/current-accounts">Current accounts</a>
                        <a href="/business-banking">Business banking</a>
                        <a href="/overdrafts-and-loans">Overdrafts and Loans</a>
                        <a href="/money-transfers">Money transfers</a>
                    </div>
                    <div className="Navbar-Container-Bottom-Right-Buttons">
                        <a href="/about">About</a>
                        <a href="/blog-and-news">Blog And News</a>
                        <a href="/help">Help</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;