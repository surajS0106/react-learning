import "./App.css";
import { Name } from "./Name.tsx";
import { Button } from "./Button.tsx";
import {Hello, HelloWithoutJSX} from "./hello.tsx"
import { UserProfile, UserProfileWithoutJSX, UserProfileWithReactFragment } from "./UserProfile.tsx";

function App() {
  return (
    <>
      <h1>React Tutorial</h1>
      <Name />
      <Button />
      <Hello />
      <HelloWithoutJSX />
      <UserProfile />
      <UserProfileWithReactFragment />
      <UserProfileWithoutJSX />
    </>
  );
}

export default App;
