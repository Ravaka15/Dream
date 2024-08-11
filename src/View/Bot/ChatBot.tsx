import React, { useState } from 'react';
import ChatBot, { Loading } from 'react-simple-chatbot';

type ChatState = {
  name: string;
  age: number;
};

const Chat = () => {
  const [chatState, setChatState] = useState<ChatState>({
    name: '',
    age: 0,
  });

  const steps = [
    {
      id: '1',
      message: 'Bievenue sur la plateforme orinix, comment en vous appel?',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      validator: (value: string) => {
        if (!value || value.trim() === '') {
          return 'Entrer votre nom.';
        }
        return true;
      },
      trigger: '3',
    },
    {
      id: '3',
      message: 'Bonjour {previousValue}, pourriez-vous me dire quel est votre âge ?',
      trigger: 'age',
    },
    {
      id: 'age',
      user: true,
      validator: (value: string) => {
        const age = Number(value);
        if (isNaN(age)) {
          return 'Entrer votre age.';
        } 
        return true;
      },
      trigger: '5',
    },
    {
      id: '5',
      message: `Super! Alors ton nom est ${chatState.name} et tu es ${chatState.age} ans.`,
      end: true,
    },
  ];

  const handleEnd = (data: { name: string; age: string }) => {
    setChatState({
      name: data.name,
      age: Number(data.age),
    });
  };

  const loading = () => <Loading />;

  return (
    <div className="App">
      <ChatBot
        steps={steps}
        handleEnd={handleEnd}
        floating={true}
        headerTitle="ChatBot"
        placeholder="Type a message..."
        botDelay={1000}
        userDelay={1000}
        loading={loading}
        width="400px"
        height="500px"
        style={{ borderRadius: '5px', boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)' }}
      />
    </div>
  );
};

export default Chat;