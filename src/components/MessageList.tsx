import type { Message } from '../types/Message';

type Props = {
  messages: Message[];
  username: string;
};

export default function MessageList({ messages, username }: Props) {
  return (
    <div className="space-y-3">
      {messages.map((msg, i) =>
        msg.system ? (
          <div key={i} className="text-center text-xs text-gray-600">
            {msg.message}
          </div>
        ) : (
          <div
            key={i}
            className={`flex ${
              msg.name === username ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-md ${
                msg.name === username
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white'
              }`}
            >
              <div className="text-xs font-semibold mb-1">
                {msg.name} · {msg.timestamp}
              </div>
              <p>{msg.message}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
