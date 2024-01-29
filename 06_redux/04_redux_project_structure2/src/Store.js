import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk as ReduxThunk } from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger)) // npm i @redux-devtools/extension, npm i redux-thunk, npm i redux-logger
)

export default store;