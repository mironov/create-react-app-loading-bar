import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

const initialState = {};
const enhancers = [];
const middleware = [];

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
});

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
