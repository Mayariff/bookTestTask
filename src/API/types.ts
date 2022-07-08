
export type paramsType ={
    searchingValue: string,
    orderBy: 'newest'|'relevance',
    startIndex: number,
    maxResults: number,
    subject: ''|'art'|'biography'|'computers'|'history'|'medical'|'poetry'
}

export type sortByType ='newest'|'relevance'
export type subjectType = ''|'art'|'biography'|'computers'|'history'|'medical'|'poetry'

export type ResponseType<T={}> ={
    totalItems: number,
    items: T
}

export type bookAPIType ={
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        categories: string[],
        imageLinks: {
            small: string,
            medium: string,
            large: string,
            extraLarge: string
        },
    },
}

export type bookDetailsType={
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        publisher: string,
        publishedDate: string,
        printType: string,
        mainCategory: string
        categories: string[],
        description: string,
        imageLinks: {
            smallThumbnail: string,
            thumbnail:string,
            small: string,
            medium: string,
            large: string,
            extraLarge: string
        },

    },
}
