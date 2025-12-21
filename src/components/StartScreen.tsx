import { MessageCircle } from 'lucide-react';

type Props = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <MessageCircle className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Chat App
        </h1>
        <p className="text-gray-600 mb-6">
          Connect with others in real-time
        </p>

        <button
          onClick={onStart}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
}
