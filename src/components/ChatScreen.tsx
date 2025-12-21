import { X } from 'lucide-react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import type { Message } from '../types/Message';

type Props = {
  roomId: string;
  username: string;
  messages: Message[];
  messageInput: string;
  setMessageInput: (v: string) => void;
  onSend: () => void;
  onLeave: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function ChatScreen({
  roomId,
  username,
  messages,
  messageInput,
  setMessageInput,
  onSend,
  onLeave,
  onKeyPress,
}: Props) {
  return (
    <div
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
          radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        imageRendering: 'pixelated',
      }}
      className="min-h-screen flex flex-col text-white"
    >
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div>
          <h2 className="text-sm font-semibold tracking-tight">
            Room <span className="text-gray-400">#{roomId}</span>
          </h2>
          <p className="text-xs text-gray-500">
            Signed in as {username}
          </p>
        </div>

        <button
          onClick={onLeave}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          {/* <X size={16} /> */}
          <span className="text-sm text-red-500 tracking-widest">Leave</span>
        </button>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-6 py-4">
        <MessageList messages={messages} username={username} />
      </main>

      {/* Input */}
      <footer className="px-6 py-4 border-t border-white/10 bg-black/40 backdrop-blur">
        <MessageInput
          value={messageInput}
          onChange={setMessageInput}
          onSend={onSend}
          onKeyPress={onKeyPress}
        />
      </footer>
    </div>
  );
}
