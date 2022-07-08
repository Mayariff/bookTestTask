import {AppRootStateType} from "../utils/store-types";


export const selectStatus = (state: AppRootStateType) => state.app.status
export const selectError = (state: AppRootStateType) => state.app.error


export const selectBooksList = (state: AppRootStateType) => state.books.items
export const selectBooksTotalItems = (state: AppRootStateType) => state.books.totalItems


export const selectParams = (state: AppRootStateType) => state.params.params
export const selectBook = (state: AppRootStateType) => state.book

