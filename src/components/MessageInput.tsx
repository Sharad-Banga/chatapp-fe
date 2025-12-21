import { Send } from 'lucide-react';

type Props = {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function MessageInput({
  value,
  onChange,
  onSend,
  onKeyPress,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Type a message…"
        className="flex-1 px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
      />

      <button
        onClick={onSend}
        className="p-3 rounded-lg bg-white text-black hover:bg-gray-100 transition transform hover:scale-105"
        aria-label="Send message"
      >
        <Send size={18} />
      </button>
    </div>
  );
}
