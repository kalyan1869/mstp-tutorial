import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'react-thunk';
import newsReducer from './newsReducer';

const store = createStore(newsReducer, applyMiddleware(thunk));
export default store;