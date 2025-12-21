import { Provider } from "react-redux";
import { store } from "./states";

function App() {
  return <Provider store={store}>test</Provider>;
}

export default App;
