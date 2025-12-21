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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-indigo-600 text-white p-4 flex justify-between">
        <div>
          <h2 className="font-bold">Room: {roomId}</h2>
          <p className="text-sm">User: {username}</p>
        </div>
        <button onClick={onLeave} className="flex items-center gap-1">
          <X size={16} /> Leave
        </button>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <MessageList messages={messages} username={username} />
      </main>

      <footer className="p-4 bg-white border-t">
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
