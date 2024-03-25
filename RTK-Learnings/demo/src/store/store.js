import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Importing 'redux-thunk' with an alias

import rootReducer from './reducers';

// Create Redux store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
