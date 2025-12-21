import { Users } from 'lucide-react';

type Props = {
  roomId: string;
  username: string;
  setRoomId: (v: string) => void;
  setUsername: (v: string) => void;
  onJoin: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function JoinRoom({
  roomId,
  username,
  setRoomId,
  setUsername,
  onJoin,
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
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="w-full max-w-md rounded-lg p-8 text-center">
        <Users className="w-10 h-10 mx-auto text-gray-500 mb-4" />

        <h2 className="text-2xl font-semibold text-white tracking-tight mb-1">
          Join Chat
        </h2>

        <p className="text-sm text-gray-400 mb-6">
          Enter a room and start talking.
        </p>

        <div className="space-y-4">
          <input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder="Room ID"
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
          />

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder="Username"
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
          />

          <button
            onClick={onJoin}
            className="w-full bg-white text-black font-semibold py-3 rounded-lg transition transform hover:scale-105 hover:bg-gray-100"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
}
