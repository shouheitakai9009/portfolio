import clsx from "clsx";
import { defaultTheme } from "../designs/theme.css";
import { wrapper } from "./App.css";

function App() {
  return <main className={clsx(wrapper, defaultTheme)}></main>;
}

export default App;
