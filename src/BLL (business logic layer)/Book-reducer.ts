import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {booksAPI} from "../API/API";
import {setAppStatus} from "./App-reducer";
import {AxiosError} from "axios";
import {errorType, handleAsyncServerAppError} from "../utils/error-utils";
import {bookType} from "./types";

export const showBookDetails = createAsyncThunk('book/showBookDetails',
    async (id: string, thunkAPI) => {
        thunkAPI.dispatch(setAppStatus({status: 'loading'}))
        const res = await booksAPI.getBook(id)
        try {
            thunkAPI.dispatch(setAppStatus({status: 'succeeded'}))
            return {book: res.data}
        } catch (er) {
            const error = er as AxiosError<errorType, any>
            return handleAsyncServerAppError(error, thunkAPI)
        }
    })


export const slice = createSlice({
    name: 'book',
    initialState: {} as bookType,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(showBookDetails.fulfilled, (state, action) => {
            state.itemID = action.payload.book.id
            state.authors = action.payload.book.volumeInfo.authors
            state.categories = action.payload.book.volumeInfo.categories
            state.imageLinks = action.payload.book.volumeInfo.imageLinks
            state.description = action.payload.book.volumeInfo.description
            state.title = action.payload.book.volumeInfo.title
        })
    }
})

export const bookReducer = slice.reducer;