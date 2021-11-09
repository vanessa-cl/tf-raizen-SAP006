import React from 'react';
import ReactSimpleChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Tahoma',
  headerBgColor: '#0077B3',
  headerFontColor: '#fff',
  headerFontSize: '18px',
  botBubbleColor: '#CBEA00',
  botFontColor: '#6E6E6E',
  userBubbleColor: '#fff',
  userFontColor: '#6E6E6E',
};

function Chatbot() {
  return (
    <ThemeProvider theme={theme}>
      <ReactSimpleChatBot
        floating={true}
        bubbleStyle={{textAlign: 'justify'}}
        avatarStyle={{width: '60px', height: '60px'}}
        botAvatar="/bot.png"
        steps={[
          {
            id: '1',
            message:
              'Olá Squad Raízen, meu nome é Bia, sou sua assistente virtual! Em que posso te ajudar?',
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
              'Certo, você pode saber mais sobre {previousValue}, abrindo um ticket na opção RH, basta clicar aqui!',
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
