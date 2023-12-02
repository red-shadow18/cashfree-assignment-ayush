import {legacy_createStore as createStore} from 'redux'
import {reducer} from "./reducer"
const enhancer= window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState={
    lists:[],
    cards:{}
}

export const store = createStore(reducer,initialState,enhancer)