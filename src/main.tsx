import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./widgets/App.tsx";
import { store } from "./states/index.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
