import { Avatar, IconButton } from "@material-ui/core"
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons"
import React, { useEffect, useState } from "react"
import "./Chat.css"

function Chat() {
  const [seed, setSeed] = useState("")
  const [input, setInput] = useState("")
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    console.log(input)
    setInput("")
  }

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat-headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen at ...............</p>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className={`chat-message ${true && "chat-reciever"}`}>
          <span className="chat-name">Akhand Patel</span>Hey guyes amazing
          <span className="chat-timestamp">3:52pm</span>
        </p>
      </div>
      <div className="chat-footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="Submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  )
}

export default Chat
