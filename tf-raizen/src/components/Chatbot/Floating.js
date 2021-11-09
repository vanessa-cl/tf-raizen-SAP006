import React from 'react';
import './Floating.scss';

function Floating() {
  return (
    <div className="chatbot-floating">
      <div className="bubble">Olá, sou sua assistente virtual!</div>
      <div className="arrow"></div>
      <img src="/bot.png" width="150px" alt="img" className="image" />
    </div>
  );
}

export default Floating;
