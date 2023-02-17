import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Head />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
