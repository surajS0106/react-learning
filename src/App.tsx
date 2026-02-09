import "./App.css";
import { Name } from "./Name.tsx";
import { Button } from "./Button.tsx";
import {Hello, HelloWithoutJSX} from "./hello.tsx"

function App() {
  return (
    <>
      <h1>React Tutorial</h1>
      <Name />
      <Button />
      <Hello />
      <HelloWithoutJSX />
    </>
  );
}

export default App;
