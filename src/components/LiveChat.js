import { useEffect } from "react"
import "./liveChat.css"

import { generateName, makeRandomCharacter } from "../utils/randomFunctions"
import { useDispatch, useSelector } from "react-redux"
import { handleLiveChat } from "../utils/chatSlice"

export const LiveChat = () => {
    const dispatch = useDispatch()
    const messages = useSelector(store => store.chat.messages);

    useEffect(() => {

      const i = setInterval(() => {
        // dispatch(handleLiveChat({name: generateName(), message: makeRandomCharacter(10) }))
        }, 500);

      return() =>{
        clearInterval(i)
      }
    }, [])

  return (
    <div className='liveChat-main'>
      <h2 className="liveChat-heading"> Live Chat </h2>
    <div className='liveChat'>
      {
        messages.map(({name, message}, index) => 
          <div className="chatMessage-main" key={index}>
            <img className="chat-user" alt="userProfile" src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' />
            <p className="chat-message"> <span className="chat-userName">{name}</span> {message} </p>
          </div>
        )
      }
    </div>
    </div>
  )
}