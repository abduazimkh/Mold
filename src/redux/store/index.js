import { createStore, applyMiddleware } from "redux";
import rootReducers from "../reducers";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: 'reducer',
  storage: storage,
  whitelist: ['cart', "auth"]
};

const presistedReducer = persistReducer(persistConfig, rootReducers );
const store = createStore(presistedReducer, 
composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export { persistor, store };