import { Content } from "./Content";
import { Header } from "./Header";
import { Layout } from "./Layout";
import { Navigation } from "./Navigation";

function App() {
  return (
    <Layout
      navigation={<Navigation />}
      header={<Header />}
      content={<Content />}
    />
  );
}

export default App;
