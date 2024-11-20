import IconButton from '../icon-button/IconButton';
import './ChatBar.css';
import { useCallback, useState } from 'react';

function ChatBar(props: {chatHistory: string[], action: any}) {

    const [chat, setChat] = useState('')
    const response = "That's interesting, I can't help with that at the moment."

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chat === '') return;
        props.action(chat, response);
        setChat('');
    }

    function handleChat(event : any) {
        setChat(event.target.value);
    }

    return (
        <div className="chat-bar">
            <form className='chat-bar-container'>
                <input className='chat-bar-input' type="text" placeholder="Type a message..." onChange={handleChat} value={chat}/>
                <IconButton img='send-message' background='none' action={handleSubmit} />
            </form>
        </div>
    )
}

export default ChatBar;