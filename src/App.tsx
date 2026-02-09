import "./App.css";
import { Name } from "./Name.tsx";
import { Button } from "./Button.tsx";
import {Hello, HelloWithoutJSX} from "./hello.tsx"
import { UserProfile, UserProfileWithoutJSX, UserProfileWithReactFragment } from "./UserProfile.tsx";
import { StyledForm } from "./StyledForm.tsx";
import { CandidateProfile } from "./CandidateProfile.tsx";
import { Product } from "./Product.tsx";
import { Greeting } from "./Greetings.tsx";
import { CardWrapper } from "./CardWrapper.tsx";
function App() {
  return (
    <>
      <h1>React Tutorial</h1>
      <CardWrapper title="Welcome Card">
        <p>This is a card component that can wrap any content.</p>
        <p>You can use it to create consistent styling for different sections of your app.</p>
      </CardWrapper>
      <Greeting />
      <Greeting name="Alice" message="Hello" />
      <Name name="Suraj Sanjay" alias="Suraj" lastName="Sanjay"/>
      <Name name="Dexter" alias="Murderer" lastName="Morgan" />
      <Name name="Anbe Diana" alias="loosu" lastName="Diana" />
      <Product name="Laptop" price={1000} description="High performance laptop for gaming and work" />
      <Button />
      <Hello />
      <HelloWithoutJSX />
      <UserProfile />
      <UserProfileWithReactFragment />
      <UserProfileWithoutJSX />
      <StyledForm />
      <CandidateProfile />
    </>
  );
}

export default App;
