//app-reducer
import {sortByType, subjectType} from "../API/types";

export type APPInitialStateType= {
    status: RequestStatusType,
        error:  null | string,
}
//params-reducer
export type ParamsInitialStateType={
    params: {
        searchingValue: string,
        orderBy:  sortByType,
        startIndex:number,
        maxResults: number,
        subject: subjectType
    }
}


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

//book-reducer
export type bookType = {
    itemID: string,
    title: string,
    imageLinks: {
        small: string,
        medium: string,
        large: string,
        extraLarge: string
    },
    authors: Array<string>
    description: string
    categories: Array<string>
}

//BookList-reducer
export type booksListinitialStateType= {
    totalItems: number,
   items: catalogBookType[]
}


export type catalogBookType = {
    id: string
    volumeInfo: {
        title: string,
        authors: string[],
        categories: string[]
        imageLinks: {
            thumbnail: string,
        }
    },
}


