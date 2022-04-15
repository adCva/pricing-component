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
      <div className="cards-container">
        <Card highlightCard={false}cardTitle="basic" cardPrice={isAnnually ? "199.99" : "19.99"} cardDetails={["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]} />
        <Card highlightCard={true}cardTitle="professional" cardPrice={isAnnually ? "249.99" : "24.99"} cardDetails={["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"]} />
        <Card highlightCard={false}cardTitle="master" cardPrice={isAnnually ? "399.99" : "39.99"} cardDetails={["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"]} />
      </div>
    </div>
  );
}

export default App;