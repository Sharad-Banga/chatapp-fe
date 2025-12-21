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
    <div className="flex gap-2">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 border rounded-lg"
      />
      <button
        onClick={onSend}
        className="bg-indigo-600 text-white p-2 rounded-lg"
      >
        <Send />
      </button>
    </div>
  );
}
