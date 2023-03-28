import React from "react";
import "./index.css";
import Header from "./Components/Header.js";
import Card from "./Components/Card.js";
import Data from "./data.js";

function App() {
  const cards=Data.map(item=>{
    return (
      <Card
      key={item.id}
      img={item.Image}
      country={item.Country}
      destinationName={item.DestinationName}
      date={item.Dates}
      info={item.Info}/>
    )
  })
  return (
    <div>
      <Header/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
