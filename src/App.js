import React from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";

export const userContext = React.createContext();
export const channelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <userContext.Provider value={"Viswa"}>
        <channelContext.Provider value={"Prashanth"}>
          <ComponentA />
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
