import axios from "axios";
import {bookAPIType, bookDetailsType, paramsType, ResponseType} from "./types";

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
})
const key = 'AIzaSyBYExHI6MlydQ-UsHcV0F4MXI64b5nkgI4'


export const booksAPI={
    getBooksList({searchingValue,
                     orderBy,
                     startIndex,
                     maxResults,
                     subject }:paramsType){
    return instance.get<ResponseType<bookAPIType[]>>(`?q=intitle:${searchingValue}+inauthor:${searchingValue}+subject:${subject}&orderBy=${orderBy}&printType=books&maxResults=${maxResults}&startIndex=${startIndex}&key=${key}`)
    },
    getBook( id: string){
        return instance.get<bookDetailsType>(`/${id}`)
    }
}