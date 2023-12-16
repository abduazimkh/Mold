import { combineReducers } from "redux";
import cart from "./cart";
import auth from "./auth";
import manage from './manage';
import order from "./order";
import lang from "./lang";

const rootReducers = combineReducers({cart, auth, manage, order, lang})

export default rootReducers;