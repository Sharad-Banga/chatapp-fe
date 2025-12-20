import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="bg-blue-200 p-4 rounded-lg m-4 text-center">
        HELLO
      </div>
      <nav>
        <Link to="/JoinRoom">Start chatting</Link>
      </nav>
    </>
  );
}

export default Home;
