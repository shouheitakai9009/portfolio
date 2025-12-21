import { Provider } from "react-redux";
import { store } from "./states";
import { Overlay } from "./designs/Overlay";
import { InlineTypography } from "./designs/InlineTypography";

function App() {
  return (
    <Provider store={store}>
      <Overlay
        content={
          <div>
            <h1>InlineTypography コンポーネントのテスト</h1>

            <p>
              <InlineTypography>通常のテキスト</InlineTypography>
            </p>

            <p>
              <InlineTypography size="lg" color="primary">
                大きなプライマリテキスト
              </InlineTypography>
            </p>

            <p>
              <InlineTypography decoration="bold" color="accent">
                太字のアクセントテキスト
              </InlineTypography>
            </p>

            <p>
              <InlineTypography as="strong" color="error">
                重要な警告
              </InlineTypography>
            </p>

            <p>
              <InlineTypography size="sm" color="muted">
                小さなミュートされたテキスト
              </InlineTypography>
            </p>

            <p>
              <InlineTypography decoration="italic" color="secondary">
                斜体のセカンダリテキスト
              </InlineTypography>
            </p>

            <p>
              <InlineTypography decoration="underline" color="success">
                下線付きの成功テキスト
              </InlineTypography>
            </p>

            <p>
              <InlineTypography size="2xl" decoration="bold" color="accent">
                2XL 太字アクセント
              </InlineTypography>
            </p>
          </div>
        }
      />
    </Provider>
  );
}

export default App;
