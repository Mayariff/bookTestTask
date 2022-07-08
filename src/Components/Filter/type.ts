export type itemType = {
    id: string
    book: {
        title: string
        imageLinks: {
            thumbnail: string,
        },
        authors: string[],
        categories: string[]
    }
}