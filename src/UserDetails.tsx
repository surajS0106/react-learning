import type { UserProps } from "./types/UserProps";

export const UserDetails = ({name, email, age, isOnline, hideOffline, isPremium, isNewUser, role}: UserProps) => {
  if(hideOffline && !isOnline){
    return null
  }

  let roleBadge = null;
  if( role === "admin"){
    roleBadge = <span style={{color: "red", fontWeight: "bold"}}>👮Admin</span>
  } else if (role === "vip"){
    roleBadge = <span style={{color: "gold", fontWeight: "bold"}}>👺VIP</span>
  }

  return (
    <div>
      <h3>{name} {roleBadge}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <span>{isOnline ? "Online" :"Offline"}</span>
      <p>{isPremium && <span>⭐Premium User</span>}</p>
      <p>{isNewUser && <span>🥳New User</span>}</p>
      <p>{isOnline ? "Available to Chat" : "Not Available to Chat"}</p>
      {isOnline? (<button>Chat</button>) : (<small>Chat Unavailable</small>)}
    </div>
  )
}