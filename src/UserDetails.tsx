import type { UserProps } from "./types/UserProps";

export const UserDetails = ({name, email, age, isOnline, hideOffline}: UserProps) => {
  if(hideOffline && !isOnline){
    return null
  }

  return (
    <div>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <span>{isOnline ? "Online" :"Offline"}</span>
      <p>{isOnline ? "Available to Chat" : "Not Available to Chat"}</p>
      {isOnline? (<button>Chat</button>) : (<small>Chat Unavailable</small>)}
    </div>
  )
}