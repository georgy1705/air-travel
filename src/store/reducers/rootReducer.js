import { combineReducers } from "redux";
import travelReducer from "./travel";

export default combineReducers({
    travel: travelReducer
})