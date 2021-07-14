import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { rootReducer } from './reducer/rootReducer';

    // can moe state overhere as a CONST

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store