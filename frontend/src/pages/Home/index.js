import React, { useState, useEffect, useRef, useMemo } from 'react';
import { IoMdSend } from 'react-icons/io';
import io from 'socket.io-client';

import { Container, Arrow } from './styles';

import {useAuth} from '../../contexts/auth';
import api from '../../services/api';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  const { logout, user, token } = useAuth();

  const inputRef = useRef();
  const chatRef = useRef();

  useEffect(() => {
    async function loadMessages() {
      const response = await api.get('/posts', {
        headers: {
          authorization: `Bearer ${token}`
        }
      });

      setMessages(response.data);
    }
    loadMessages();
  }, [token]);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const socket = useMemo(() => io('localhost:3333'), []);

  useEffect(() => {
    socket.on('newPost', post => {
      setMessages(messages => ([...messages, {
        _id: post.post._id,
        content: post.post.content,
        author: post.author
      }]));
    });
  }, [socket]);

  function handleLogout() {
    logout();
  }

  async function sendMessage() {
    try {
      await api.post('/posts', {content}, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });

      setContent('');

      inputRef.current.focus();
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    } catch(error) {
      alert(error);
    }
  };

  async function handleSendMessage() {
    await sendMessage();
  }

  async function handleSendMessageEnterKey(e) {
    if(e.key !== 'Enter') return;

    await sendMessage();
  }

  return(
    <Container>
      <header>
        <h1>Live Chat</h1>
        <div className="utils">
          <button>Perfil</button>
          <button onClick={handleLogout}>LogOut</button>
        </div>
      </header>

      <main>
        <div className="user_info">
          <div className="avatar">
            {user.name.split(' ').map(name => name[0])}
          </div>
          <h2 className="user_name">{user.name}</h2>
        </div>

        <div className="chat" ref={chatRef}>

          { messages && messages.map(message => (
            message.author._id === user._id ? (
              <div key={message._id} className="message_user">
                <div className="user_avatar">
                  {message.author.name.split(' ').map(name => name[0])}
                </div>
                <Arrow />
                <div className="text">{message.content}</div>
              </div>
            ) : (
              <div key={message._id} className="message">
                <div className="user_avatar">
                  {message.author.name.split(' ').map(name => name[0])}
                </div>
                <Arrow />
                <div className="text">{message.content}</div>
              </div>
            )
            
          )) }          
        </div>

        <div className="input">
          <input
            ref={inputRef} 
            type="text"
            placeholder="Insert a message here..."
            value={content}
            onChange={e => setContent(e.target.value)}
            onKeyPress={handleSendMessageEnterKey}
          />
          <button onClick={handleSendMessage}><IoMdSend color="#fff" size={20} /></button>
        </div>
      </main>
    </Container>
  );
}
