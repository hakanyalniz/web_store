import HomePage from "./pages/HomePage";
import GlobalStyle from "./styled_components/GlobalStyle";
import { Provider } from "react-redux";
import store from "./store/store"; // Import the store

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
