import { createStore } from "redux";
import langReducer from "../reducer/langReducer";

const store=createStore(langReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store