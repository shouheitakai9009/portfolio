import { Layout } from "./Layout";
import { Navigation } from "./Navigation";

function App() {
  return (
    <Layout
      navigation={<Navigation />}
      header={<div>Header</div>}
      content={<div>Content</div>}
    />
  );
}

export default App;
