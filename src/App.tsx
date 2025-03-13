
import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {

  const wsRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const [messages,setMessages] = useState(["hii there ee","hello"]);

  

    useEffect(()=>{

    const ws = new WebSocket("ws://localhost:8080")
      ws.onmessage = (event) =>{
        setMessages(m=>[...m,event.data]);
      }
      wsRef.current = ws;

      ws.onopen=()=>{
        ws.send(JSON.stringify(
          {
            type : "join",
            payload:{
              roomId : "red"
            }
          }
        ))
      }

    },[])

    const jjfxn =() =>{

      wsRef.current.send(JSON.stringify(
        {
          type:"chat",
          payload:{
            message:inputRef.current.value
          }
        }
      ))

      inputRef.current.value = "";
    }

  return (
    <>
      
      <div className='h-screen w-screen bg-black flex flex-col'>


            <div className="text-center text-white font-mono ">
              Chat App
            </div>

            <div className="h-[80vh] bg-red-800 m-4">
              {messages.map(message => <div className='bg-white p-3 m-3 w-max rounded-lg text-sm' key={message}>{message}</div> )}
            </div>

            <div className=''>

              <input ref={inputRef} className="text w-[85vw] p-4 ml-4 mr-4" />
              <button className='bg-orange-500 text-white p-4 rounded-md' onClick={jjfxn}>Send</button>

            </div>






      </div>
      
      
    </>
  )
}

export default App
