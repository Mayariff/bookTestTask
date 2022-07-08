import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appDispatchType, AppRootStateType} from "./store-types";


export const useAppDispatch=()=> useDispatch<appDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

