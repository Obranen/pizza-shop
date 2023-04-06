import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {root} from './reducers/root';
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)))