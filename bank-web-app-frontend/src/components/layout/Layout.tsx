// components/Layout.tsx
import { useState, useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from '../modal/Modal';
import IconButton from '../icon-button/IconButton';
import './Layout.css';

function Layout() {
  const [showModal, setShowModal] = useState(() => {
    const savedModalState = localStorage.getItem('showModal');
    return savedModalState ? JSON.parse(savedModalState) : false;
  });

  const [chatHistory, setChatHistory] = useState(() => {
    const savedChatHistory = localStorage.getItem('chatHistory');
    return savedChatHistory 
      ? JSON.parse(savedChatHistory) 
      : ["Hi there, I'm your figma banking assistant! How may I help you today?"];
  });

  useEffect(() => {
    localStorage.setItem('showModal', JSON.stringify(showModal));
  }, [showModal]);

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, [chatHistory]);
  
  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, []);

  const updateChatHistory = useCallback((newMessage: string) => {
    const response = "That's interesting, I can't help with that at the moment.";
    setChatHistory([...chatHistory, newMessage, response]);
  }, []);

  const clearModalState = () => {
    localStorage.removeItem('showModal');
    localStorage.removeItem('chatHistory');
    setShowModal(false);
    setChatHistory(["Hi there, I'm your figma banking assistant! How may I help you today?"]);
};

  return (
    <div>
      <div id='Icon-Button'>
        <IconButton img="chat-bot" action={toggleModal} />
      </div>
      
      <div id='Chat-Window'>
        {showModal && (
          <Modal 
            chatHistory={chatHistory}
            onNewMessage={updateChatHistory}
          />
        )}
      </div>
      
      <Outlet />
    </div>
  );
}

export default Layout;
