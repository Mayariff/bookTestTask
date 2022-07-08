import {booksAPI} from "../API/API";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setAppStatus} from "./App-reducer";
import {AxiosError} from "axios";
import {errorType, handleAsyncServerAppError} from "../utils/error-utils";
import {paramsType} from "../API/types";
import {catalogBookType} from "./types";


export const fetchBooks = createAsyncThunk('booksList/fetchBooks',
    async (params: paramsType, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            const res = await booksAPI.getBooksList(params)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return {bookData: res.data}
        } catch (er) {
            const error = er as AxiosError<errorType, any>
            return handleAsyncServerAppError(error, thunkAPI)
        }
    })


export const addNewBatchBooks = createAsyncThunk('booksList/addBooks',
    async (params: paramsType, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        try {
            const res = await booksAPI.getBooksList(params)
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return {bookData: res.data}
        } catch (er) {
            const error = er as AxiosError<errorType, any>
            return handleAsyncServerAppError(error, thunkAPI)
        }
    })

export const slice = createSlice({
    name: 'booksList',
    initialState: {
        totalItems: 0,
        items: [] as catalogBookType[]
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            return action.payload.bookData
        })
        builder.addCase(addNewBatchBooks.fulfilled, (state, action) => {
            state.items.push(...action.payload.bookData.items)
            Array.from(new Set(state.items))
        })
    }
})

export const booksListReducer = slice.reducer;