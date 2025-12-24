import { Content } from "./Content";
import { Header } from "./Header";
import { Layout } from "./Layout";
import { Navigation } from "./Navigation";
import { BackgroundAnimation } from "./BackgroundAnimation";

function App() {
  return (
    <>
      <BackgroundAnimation />
      <Layout
        navigation={<Navigation />}
        header={<Header />}
        content={<Content />}
      />
    </>
  );
}

export default App;
