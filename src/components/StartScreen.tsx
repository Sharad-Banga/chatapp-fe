
type Props = {
  onStart: () => void;
};

export default function StartScreen({ onStart }: Props) {
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
    className="min-h-screen  bg-black flex items-center justify-center p-4">
      <div className="  border-white/0 border-2 rounded-lg h-2/6  p-8 max-w-md w-full text-center">

        <h1 className="text-4xl  text-white mb-2 font-semibold tracking-tight">
          Zero Chat
        </h1>

        <p className="text-gray-400 mb-6 text-sm ">
          Simple.  Real-time.  
        </p>

        <button
          onClick={onStart}
          className="w-36 bg-white text-md  hover:bg-gray-100 text-black hover:text-black font-semibold py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
}
