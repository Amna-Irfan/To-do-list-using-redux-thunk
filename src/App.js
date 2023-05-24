import React from "react";
import Container from "./components/js/Container";
import store from './store';
import { Provider } from "react-redux";

function App() {
  return (
      <Provider store={store}>
      <Container />
      </Provider>
  )
}

export default App;
