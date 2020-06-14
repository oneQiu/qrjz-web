import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import reducers from "reducers/reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger();
const composeEnhancers =
	(typeof window !== "undefined" &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
export default createStore(
	combineReducers(reducers),
	composeEnhancers(applyMiddleware(thunk, logger))
);
