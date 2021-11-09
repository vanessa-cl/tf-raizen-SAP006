import React from 'react';
import ReactSimpleChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Floating from './Floating';
import theme from './Chatbot.theme';
import './Chatbot.scss';


function Chatbot() {
  return (
    <ThemeProvider theme={theme}>
      <ReactSimpleChatBot
        floating={true}
        floatingStyle={{width: '150px', height: '150px', background:'none', boxShadow: 'none' }}
        floatingIcon={<Floating/>}
        bubbleStyle={{textAlign: 'justify'}}
        avatarStyle={{width: '60px', height: '60px'}}
        botAvatar="/bot.png"
        userAvatar="/userAvatar.png"
        steps={[
          {
            id: '1',
            message:
              'Olá Squad Raízen! Tudo bem? Aqui é a Bia, sua assistente virtual. Em que posso te ajudar?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message:
              'Certo, você pode saber mais sobre {previousValue}, no Portal RH, basta  clicar aqui!',
            trigger: '4',
          },
          {
            id: '4',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message:
              'Fico feliz em ajudar!',
            end: true,
          },
        ]}
      />
    </ThemeProvider>
  );
}

export default Chatbot;
