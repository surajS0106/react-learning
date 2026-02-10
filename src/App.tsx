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
import { UserDetails } from "./UserDetails.tsx";
import { ProductList } from "./ProductList.tsx";
import { NameList } from "./NameList.tsx";
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
      <UserDetails name="Suraj Sanjay" email="surajsanjay1999@gmail.com" age={26} isOnline={true} hideOffline={false} isPremium={true} isNewUser={true} role="admin" />
      <UserDetails name="Dexter Morgan" email="dexter.morgan@example.com" age={35} isOnline={false} hideOffline={false} isPremium={false} isNewUser={false} role="vip" />
      <ProductList />
      <NameList />
    </>
  );
}

export default App;
