import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { DogList } from "./screens/index";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DogList />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
