import rootReducer from "./Reducers";
import {createStore} from "redux";


const store = crateStore(rootReducer)

export default store