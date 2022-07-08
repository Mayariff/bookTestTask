import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {configureStore} from "@reduxjs/toolkit";
import {booksListReducer} from "./BooksList-reducer";
import {appReducer} from "./App-reducer";
import {paramsReducer} from "./Params-reducer";
import {bookReducer} from "./Book-reducer";


export const rootReducer = combineReducers({
    app: appReducer,
    books: booksListReducer,
    book: bookReducer,
    params: paramsReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(thunk),
})


// @ts-ignore
window.store = store;

