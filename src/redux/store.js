import { createStore,applyMiddleware } from 'redux'
import TaskReducer from './reducers/TaskReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const store = createStore(TaskReducer, applyMiddleware(logger, thunk));