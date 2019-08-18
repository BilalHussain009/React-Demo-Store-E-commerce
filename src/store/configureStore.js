import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import itemReducer from '../reducers/items';
import cartReducer from '../reducers/cart';
import amountReducer from '../reducers/totalAmount';
import sortReducer from '../reducers/sort';
import searchReducer from '../reducers/search';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      items:itemReducer,
      cart:cartReducer,
      totalAmount:amountReducer,
      sort:sortReducer,
      search:searchReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
