import type { Message } from '../types/Message';

type Props = {
  messages: Message[];
  username: string;
};

export default function MessageList({ messages, username }: Props) {
  return (
    <div className="space-y-6">
      {messages.map((msg, i) =>
        msg.system ? (
          <div
            key={i}
            className="text-center text-xs text-gray-500 italic"
          >
            {msg.message}
          </div>
        ) : (
          <div
            key={i}
            className={`flex flex-col ${
              msg.name === username ? 'items-end' : 'items-start'
            }`}
          >
            {/* Metadata */}
            <div className="mb-1 text-xs text-gray-500">
              <span className="font-medium text-gray-300">
                {msg.name}
              </span>
              <span className="mx-1 opacity-50">·</span>
              <span>{msg.timestamp}</span>
            </div>

            {/* Message bubble (TEXT ONLY) */}
            <div
              className={`max-w-md px-4 py-3 rounded-lg ${
                msg.name === username
                  ? 'bg-white/10 text-white'
                  : 'bg-white/50 text-black'
              }`}
            >
              <p className="text-sm font-semibold leading-relaxed whitespace-pre-wrap">
                {msg.message}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
