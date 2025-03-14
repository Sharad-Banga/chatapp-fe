
import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {

  const wsRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const [messages,setMessages] = useState(["hii there","what's up?"]);

  

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
              roomId : "red",
              name:"sharad"
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


            <div className="text-center text-white font-mono mt-2">
              Chat App
            </div>

            <div className="h-[80vh] bg-purple-900 m-4 ">
              
              {messages.map(message =>

                  <div className='flex items-center'>
                    <span className='text-sm  text-yellow-100 p-1'>sharad : </span>
                    
                    <div className='bg-white p-3 m-1 w-max rounded-lg text-sm' key={message}>{message}</div>
                    
                  </div>
                 
                 )}
            </div>

            <div className=''>

              <input ref={inputRef} className="text w-[75vw] p-4 ml-4 mr-4" />
              <button className='bg-orange-500 text-white p-4 rounded-md' onClick={jjfxn}>Send</button>

            </div>






      </div>
      
      
    </>
  )
}

export default App
