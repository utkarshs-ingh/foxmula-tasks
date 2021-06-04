import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import weatherDataReducer from "./reducer";


const reducer = combineReducers({
	weatherData: weatherDataReducer
});


const middleware = [thunk];
const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
