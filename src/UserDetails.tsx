import type { UserProps } from "./types/UserProps";

export const UserDetails = ({name, email, age, isOnline}: UserProps) => {
  if (isOnline) {
    return (
      <div>
        <h2>User Details</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        <p>Status: Online</p>
      </div>
    );
  }
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Status: Offline</p>
    </div>
  );
}