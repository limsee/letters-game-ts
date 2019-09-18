import * as React from "react";
import "./App.css";
import LetterList from "./components/LetterList";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <LetterList />
      </div>
    );
  }
}

export default App;
