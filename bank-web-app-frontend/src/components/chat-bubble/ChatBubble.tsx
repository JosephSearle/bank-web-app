import './ChatBubble.css';
import "@fontsource/roboto/300.css";

function ChatBubble(props: {text: string, index: number}) {

    let style = props.index % 2 === 1 ? '-user' : '-bot'

    return (
        <div className={"chat-bubble"+style}>
            <p>{props.text}</p>
        </div>
    );
}

export default ChatBubble;