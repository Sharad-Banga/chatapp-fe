import { useRef } from "react"
import { socketRef } from "./socket";  
import { useNavigate } from "react-router-dom";
// import { log } from "console";


function JoinRoom() {
  const sendMessage = (inp:string) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current?.send(inp);
      inputRef.current.value = "";
    }
};
const inputRef = useRef<any>(null);

    const navigate = useNavigate();

    return(
      <>
        <input type="text" name="" id="" ref={inputRef}  />
        <button onClick={() => {  
            sendMessage(`{
                            "type" : "join-room",
                            "roomId" : ${inputRef.current.value }
                        }`);
                        // log("Joining room:", inputRef.current.value);
            navigate("/Chat");
        }}>Join Room</button>
      </>
    )
}

export default JoinRoom