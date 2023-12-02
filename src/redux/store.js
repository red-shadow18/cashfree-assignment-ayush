import {legacy_createStore as createStore} from 'redux'
import {reducer} from "./reducer"
import { getLocalStorageItem } from '../utils/localstorage-utils';
const enhancer= window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__();

const initialState={
    lists:getLocalStorageItem("lists",[]),
    cards:getLocalStorageItem("cards",{}),
}

export const store = createStore(reducer,initialState,enhancer)