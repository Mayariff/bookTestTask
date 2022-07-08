import {ThunkAction} from "redux-thunk";
import {rootReducer, store} from "../BLL (business logic layer)/store";

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, any>
export type appDispatchType= typeof store.dispatch
