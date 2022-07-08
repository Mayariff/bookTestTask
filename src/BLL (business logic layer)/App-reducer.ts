import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RequestStatusType} from "./types";


const slice = createSlice({
    name: 'APP',
    initialState: {
        status: 'idle',
        error: null as null | string,
    },
    reducers: {
        setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
        setAppError(state, action: PayloadAction<{ error: string | null }>) {
            if (action.payload.error) {
                state.error = action.payload.error
            }
        },

    },

})

export const appReducer = slice.reducer;
export const {setAppError, setAppStatus} = slice.actions


