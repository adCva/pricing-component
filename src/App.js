import './Reset.css';
import './Config.css';
import { useState } from "react";
import Card from "./Components/Card";


function App() {
  const [ isAnnually, setIsAnnualy ] = useState(false);


  return (
    <div className="App">
      <h1>Our Pricing</h1>
      <div className="toggle-container">
        <p>Annually</p>
        <div className={isAnnually ? "toggle-btn toggle-btn-left" : "toggle-btn"} onClick={() => setIsAnnualy(!isAnnually)} ></div>
        <p>Monthly</p>
      </div>
      <Card cardTitle="basic" cardPrice="19.99" cardDetails={["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]} />
      <Card cardTitle="professional" cardPrice="24.99" cardDetails={["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"]} />
      <Card cardTitle="master" cardPrice="39.99" cardDetails={["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"]} />
    </div>
  );
}

export default App;