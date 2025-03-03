import { useContext, useEffect } from "react"
import "./liveChat.css"
import { AppContext } from "../context/AppContext"
import { generateName, makeRandomCharacter } from "../utils/randomFunctions"

export const LiveChat = () => {
    const {handleLiveChat, liveMessages} = useContext(AppContext)

    useEffect(() => {

      const i = setInterval(() => {
        handleLiveChat({name: generateName(), message: makeRandomCharacter(10) })
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
        liveMessages.map(({name, message}, index) => 
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