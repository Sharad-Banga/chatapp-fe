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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <Users className="w-12 h-12 mx-auto text-indigo-600 mb-3" />
          <h2 className="text-2xl font-bold">Join a Room</h2>
        </div>

        <div className="space-y-4">
          <input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder="Room ID"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg"
          />

          <button
            onClick={onJoin}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
          >
            Enter Room
          </button>
        </div>
      </div>
    </div>
  );
}
