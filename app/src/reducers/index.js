import dataReducer from "./data";
import films from "./films";
import { combineReducers } from "redux";

const reducers = combineReducers({
    dataReducer, films
});

export default reducers;
