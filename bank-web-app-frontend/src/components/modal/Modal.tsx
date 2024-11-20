import { useEffect, useRef, useState } from 'react';
import ChatBar from '../chat-bar/ChatBar';
import './Modal.css'
import ChatBubble from '../chat-bubble/ChatBubble';

interface ModalProps {
    chatHistory: string[]; 
    onNewMessage: (message: any) => void;
}

function Modal({ chatHistory, onNewMessage }: ModalProps) {

    const chatWindowRef = useRef<HTMLDivElement>(null);
    const [shouldAutoScroll, setShouldAutoScroll] = useState(true);

    const scrollToBottom = () => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    };

    const handleScroll = () => {
        if (chatWindowRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatWindowRef.current;
            const isScrolledToBottom = scrollHeight - scrollTop - clientHeight < 10;
            setShouldAutoScroll(isScrolledToBottom);
        }
    };

    // Scroll to bottom whenever chat history updates
    useEffect(() => {
        if (shouldAutoScroll) {
            scrollToBottom();
        }
    }, [chatHistory]);

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-chat-window" ref={chatWindowRef} onScroll={handleScroll}>
                    {chatHistory.map((chat, index) => <ChatBubble text={chat} index={index} key={index}/>)}
                </div>
                <div className="modal-chat-bar">
                    <ChatBar chatHistory={chatHistory} action={onNewMessage}/>
                </div>
            </div>
        </div>
    );
}

export default Modal;