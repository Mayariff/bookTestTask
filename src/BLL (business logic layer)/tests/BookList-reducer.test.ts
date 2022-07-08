import {bookAPIType, paramsType, ResponseType} from "../../API/types";
import {booksListinitialStateType} from "../types";
import {addNewBatchBooks, fetchBooks, slice} from "../BooksList-reducer";

let startState: ResponseType<bookAPIType[]>

const booksListReducer= slice.reducer
beforeEach(() => {
    startState = {
        totalItems: 2,
        items: [
            {
                id: 'zyTCAlFPjgYC',
                volumeInfo: {
                    title: 'The Google Story (2018 Updated Edition)',
                    authors: ["David A. Vise", "Mark Malseed"],
                    categories: ["Business & Economics / Entrepreneurship",
                        "Computers / Information Technology"],
                    imageLinks: {
                        small: 'http://books.google.com',
                        medium: 'http://books.google.com',
                        large: 'http://books.google.com',
                        extraLarge: 'http://books.google.com'
                    },
                },
            },
        ]
    }
})

test('books details should be added', () => {

    const params = { }as paramsType

    let payload = {bookData: startState}
    const action = fetchBooks.fulfilled(payload, 'params', params)

    const endState = booksListReducer({} as booksListinitialStateType, action)

    expect(endState.totalItems).toBe(2)
    expect(endState.items.length).toBe(1)
})

test('new book  should be added', () => {

    const params = { }as paramsType

    let payload = {bookData: {
            totalItems: 1,
            items: [
                {
                    id: 'UYNMAAAAMAAJ',
                    volumeInfo: {
                        title: 'Flowers Chronicles',
                        authors: ["Pugh Brown Flowers"],
                        categories: ['North Carolina'],
                        imageLinks: {
                            small: 'http://books.google.com',
                            medium: 'http://books.google.com',
                            large: 'http://books.google.com',
                            extraLarge: 'http://books.google.com'
                        },
                    },
                }
            ]}}

    let newInitialState:booksListinitialStateType =  {
        totalItems: 1,
        items:[
            {id: 'zyTCAlFPjgYC',
                volumeInfo: {
                title: 'The Google Story (2018 Updated Edition)',
                    authors: ["David A. Vise", "Mark Malseed"],
                    categories: ["Business & Economics / Entrepreneurship",
                        "Computers / Information Technology"],
                    imageLinks: {thumbnail: 'http://books.google.com'}}}
        ]}

    const action = addNewBatchBooks.fulfilled(payload, 'params', params)
    const endState = booksListReducer(newInitialState, action)
    expect(endState.items.length).toBe(2)
})