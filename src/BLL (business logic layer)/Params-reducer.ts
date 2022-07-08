import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {paramsType, sortByType, subjectType} from "../API/types";


const slice = createSlice({
    name: 'params',
    initialState: {
        params: {
            searchingValue: '',
            orderBy: 'relevance' as sortByType,
            startIndex: 0,
            maxResults: 30,
            subject: '' as subjectType
        }
    },
    reducers: {
        setParams(state, action: PayloadAction<paramsType>) {
            state.params = {...state.params, ...action.payload}
        },
    },


})

export const paramsReducer = slice.reducer;
export const {setParams} = slice.actions
