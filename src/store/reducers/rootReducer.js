import { combineReducers } from "redux";
import filtersReducer from "./filters";
import travelReducer from "./travel";

export default combineReducers({
    travel: travelReducer,
    filters: filtersReducer
})