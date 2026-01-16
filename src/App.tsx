import { useEffect, useRef, useState } from 'react';
import StartScreen from './components/StartScreen';
import JoinRoom from './components/JoinRoom';
import ChatScreen from './components/ChatScreen';
import type { Message } from './types/Message';
const API_URL = import.meta.env.VITE_API_URL;



type Screen = 'start' | 'join' | 'chat';

export default function App() {
  const [screen, setScreen] = useState<Screen>('start');
  const [ws, setWs] = useState<WebSocket | null>(null);

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  /** Auto-scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  /** Cleanup */
  useEffect(() => {
    return () => ws?.close();
  }, [ws]);

  /** Start websocket */
  const handleStartChat = () => {
    const socket = new WebSocket(API_URL );

    socket.onopen = () => {
      setWs(socket);
      setScreen('join');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'chat') {
        setMessages((prev) => [
          ...prev,
          {
            name: data.name,
            message: data.message,
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      }

      if (data.type === 'user-joined' || data.type === 'user-left') {
        setMessages((prev) => [
          ...prev,
          {
            system: true,
            message:
              data.type === 'user-joined'
                ? `${data.name} joined the room`
                : `${data.name} left the room`,
            timestamp: new Date().toLocaleTimeString(),
          },
        ]);
      }
    };

    socket.onclose = () => {
      resetApp();
    };

    socket.onerror = () => {
      alert('WebSocket connection failed');
      resetApp();
    };
  };

  /** Join room */
  const handleJoinRoom = () => {
    if (!roomId.trim() || !username.trim()) {
      alert('Room ID and Username required');
      return;
    }

    ws?.send(
      JSON.stringify({
        type: 'join-room',
        roomId,
      })
    );

    setMessages([
      {
        system: true,
        message: `Joined room: ${roomId}`,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);

    setScreen('chat');
  };

  /** Send message */
  const handleSendMessage = () => {
    if (!messageInput.trim()) return;

    ws?.send(
      JSON.stringify({
        type: 'chat',
        roomId,
        name: username,
        message: messageInput,
      })
    );

    setMessageInput('');
  };

  /** Enter key handler */
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (screen === 'join') handleJoinRoom();
      if (screen === 'chat') handleSendMessage();
    }
  };

  /** Leave room */
  const handleLeaveRoom = () => {
    ws?.close();
    resetApp();
  };

  const resetApp = () => {
    setWs(null);
    setRoomId('');
    setUsername('');
    setMessages([]);
    setMessageInput('');
    setScreen('start');
  };

  /** Screen switch */
  if (screen === 'start') {
    return <StartScreen onStart={handleStartChat} />;
  }

  if (screen === 'join') {
    return (
      <JoinRoom
        roomId={roomId}
        username={username}
        setRoomId={setRoomId}
        setUsername={setUsername}
        onJoin={handleJoinRoom}
        onKeyPress={handleKeyPress}
      />
    );
  }

  return (
    <>
      <ChatScreen
        roomId={roomId}
        username={username}
        messages={messages}
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        onSend={handleSendMessage}
        onLeave={handleLeaveRoom}
        onKeyPress={handleKeyPress}
      />
      <div ref={messagesEndRef} />
    </>
  );
}
