import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import JoinRoom from './JoinRoom'
import { useEffect } from 'react'
import { socketRef } from './socket'

function App() {

  useEffect(() => {
    socketRef.current = new WebSocket('ws://localhost:3001');

    return () => {
      socketRef.current?.close();
    };
  }, []);

  return (
    <div>
        Chat App
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JoinRoom" element={<JoinRoom />} />
      </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
