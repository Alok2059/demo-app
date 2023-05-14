import { createStore } from "redux";
import reducer from "./reducers/form-reducer";

const store = createStore(reducer);

export default store;
