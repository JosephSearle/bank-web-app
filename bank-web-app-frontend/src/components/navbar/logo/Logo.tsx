import "@fontsource/roboto/500.css";
import './Logo.css'

function Logo() {
    return (
        <div className="Logo">
            <div className="Logo-Container">
                <img src="figma_bank_icon.png" alt="Logo" />
                <div className="Logo-Text">
                    <h1>Figma</h1>
                    <h1>Bank</h1>
                </div>
            </div>
        </div>
    )
}

export default Logo;