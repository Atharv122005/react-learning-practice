
import './App.css'
import Greeting from './components/Greeting.jsx'
import UserCard from "./components/UserCard.jsx";
import DynamicPriceCard from "./components/DynamicPriceCard.jsx";
import LoginStatus from './components/LoginStatus.jsx';
import Button from "./components/Button.jsx";
import ConditionalStyling from './components/conditional/ConditionalStyling.jsx';
import CardItem from './components/conditional/CardItem.jsx';
import User from './components/conditional/User.jsx';
function App() {
        let userData={
        username: "atharv",
        age:21,
        college:"MIT UNIVERSITY"
      }
  return (
    <>
      <h1>Hi Atharv...</h1>
      <Greeting name="Atharv"/>
      <Greeting name="rahul"/>
      <Greeting name={122}/> 


      <UserCard name="atharv" age={21} city="jamner"/>

      <DynamicPriceCard title="Laptop" price={50000}/>

      <LoginStatus loginstatus={false}/>

      <Button button="Click Me"/>

      <ConditionalStyling  isActive={true} />

      <CardItem price={12000} Quantity={4}/>

      <User {...userData}/>
    </> 

  )
}

export default App
