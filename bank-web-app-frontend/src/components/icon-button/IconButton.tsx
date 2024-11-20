import ChatBot from '../../resources/chat_bot.png';
import SendMessage from '../../resources/send-message.png';
import './IconButton.css';

function IconButton(props: { img: string, action?: any, background?: string }) {

    let img;
    let none = props.background == 'none' ? '-' + props.background : '';

    if (props.img == "chat-bot") {
        img = ChatBot;
    } else if (props.img == "send-message") {
        img = SendMessage;
    }

    return (
        <button className={'Icon-Button'+none} onClick={props.action}>
            <img id={props.img} src={img} alt="Button Icon" />
        </button>
    )
}

export default IconButton;