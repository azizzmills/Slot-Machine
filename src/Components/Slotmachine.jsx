import React, { useState, useEffect } from 'react';
import { Container, Row, Button, Image } from 'react-bootstrap';
import Confetti from 'react-confetti';
import './Caroseul.css'
import Cherry from './images/cherry.png'
import Grape from './images/grape.png'
import Lemon from './images/lemon.png'
import Orange from './images/orange.png'

const SlotMachine2 = () => {
    const symbols = [Cherry,Grape,Lemon,Orange];
    const [slot1, setSlot1] = useState(symbols[0]);
    const [slot2, setSlot2] = useState(symbols[1]);
    const [slot3, setSlot3] = useState(symbols[2]); 
    const [isSpinning, setIsSpinning] = useState(false);
    const [isConfettiActive, setIsConfettiActive] = useState(false);
  ;

  useEffect(() => {
    // Check if all slots have the same value
    if (slot1 === slot2 && slot2 === slot3) {
      setIsConfettiActive(true);     
    } else {
      setIsConfettiActive(false);      
    }
  }, [slot1, slot2, slot3]);
  
    const spin = () => {
      setIsSpinning(true);
      const interval = setInterval(() => {
        setSlot1(symbols[Math.floor(Math.random() * symbols.length)]);
        setSlot2(symbols[Math.floor(Math.random() * symbols.length)]);
        setSlot3(symbols[Math.floor(Math.random() * symbols.length)]);
      }, 100);
  
      setTimeout(() => {
        clearInterval(interval);
        setIsSpinning(false);
      }, 2000);
    };   
  
    return (
      <Container>
        <Row className='d-flex align-items-center justify-content-center'>               
          <div className='d-flex flex-column align-items-center justify-content-center machine '>
            <h1 className='title'>Feeling Lucky?</h1>
            <ul className='symbol-shift'>
              <li>
              <Image src={slot1} className='symbol-size' />
              </li>
              <li>
              <Image src={slot2} className='symbol-size'/>
              </li>
              <li>
              <Image src={slot3} className='symbol-size'/>
              </li>
            </ul> 
            <Button className='button-placement'onClick={spin} disabled={isSpinning}>
          {isSpinning ? 'Spinning...' : 'Spin'}
          {isConfettiActive && 
          <div className="confetti-overlay">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>}
          </Button>
          </div>           
        </Row>
      </Container>        
    );
  };    
  export default SlotMachine2; 