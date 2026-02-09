import { UserDetails } from "./UserDetails"

interface UserProps {
  name: string
  email: string
  age: number
}


export const UserCard = (props: UserProps) => {
  return (
    <div>
      <h2>User {props.name} Details</h2>
      <UserDetails {...props} />
    </div>
  )
}