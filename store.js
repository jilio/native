import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'persist',
  storage,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SOME_ACTION':
      return {
        ...state,
        persist: {
          testTextValue: 'Very native',
        },
      }

    default:
      return state
  }
}

const persistedReducer = persistReducer(persistConfig, reducer)

const initialState = {
  persist: {
    testTextValue: 'Native Bratishka',
  },
}

const composeEnhancers = composeWithDevTools({})
const middleware = []
const enhancers = composeEnhancers(applyMiddleware(...middleware))

export default () => {
  const store = createStore(persistedReducer, initialState, enhancers)
  const persistor = persistStore(store)

  return { store, persistor }
}
