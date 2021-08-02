import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import persistData from 'redux-localstorage'

// Reducers
import { noteReducer } from './noteDucks'

const rootReducer = combineReducers({
  note: noteReducer,
})

const composeEnhancers = composeWithDevTools(
  applyMiddleware(thunk),
  persistData('note')
)

export default function generateStore() {
  const store = createStore( rootReducer, composeEnhancers)
  return store
}