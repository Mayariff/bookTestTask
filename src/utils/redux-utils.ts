import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appDispatchType, AppRootStateType} from "./store-types";
import {ActionCreatorsMapObject, bindActionCreators} from "@reduxjs/toolkit";
import {useMemo} from "react";


export const useAppDispatch=()=> useDispatch<appDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

