import './Button.css'

interface ButtonProps {
    title: string;
    location?: string;
}

function Button({ title, location }: ButtonProps) {

    return(
        <button className="Button">
            <a href={location}>
                {title}
            </a>
        </button>
    );
}

export default Button;