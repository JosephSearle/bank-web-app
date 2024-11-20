import { useCallback, useState } from 'react';
import Button from '../components/button/Button';
import IconButton from '../components/icon-button/IconButton';
import Modal from '../components/modal/Modal';
import Navbar from '../components/navbar/Navbar';
import CreditCard from '../resources/credit_card_1.svg';
import './Home.css'

function Home() {
  return (
    <div className="Home">
      <div className="Home-Container">
        <Navbar />

        <img id='Credit-Card' src={CreditCard} alt="Credit Card JPEG"/>
        
        <p>Master your money with award-winning
        banking on your phone</p>
        
        <Button title="Apply for a bank account" location='/sign-up'/>
      </div>
    </div>
  );
}

export default Home;