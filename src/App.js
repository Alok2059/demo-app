import "./styles.css";
import { Provider } from "react-redux";
import Form from "./components/form/Form";
import store from "./store/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Form />
      </Provider>
    </>
  );
}
