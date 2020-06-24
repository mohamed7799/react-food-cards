import React from "react";
import Header from "./comp/header/header";
import FoodCards from "./comp/foodCards/foodCards";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FoodCards></FoodCards>
    </div>
  );
}

export default App;
