import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

export default store

