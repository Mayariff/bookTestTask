import {ChangeEventHandler, KeyboardEventHandler} from "react";

export type SearchInputType={
    value:string
    onChange:ChangeEventHandler<HTMLInputElement>
    onKeyPress: KeyboardEventHandler<HTMLDivElement>
    onClick:()=>void
}