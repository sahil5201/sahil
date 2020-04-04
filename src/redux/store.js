import { createStore,applyMiddleware } from 'redux'
import TaskReducer from './reducers/TaskReducer'
import logger from 'redux-logger'

export const store = createStore(TaskReducer,applyMiddleware(logger))