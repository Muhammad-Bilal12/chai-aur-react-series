import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <h1 className="text-3xl mb-5 font-bold text-white">React Props</h1>
      <div className="flex justify-between">
        <Card
          name="Guriya"
          image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
          btnText="Visit"
        />
        <Card
          name="Naima"
          btnText="Check out"
          image="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Card
          name="Ali"
          image="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </>
  );
}

export default App;
