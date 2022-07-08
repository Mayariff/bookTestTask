import {showBookDetails, slice} from "../Book-reducer";
import {bookType} from "../types";
import {bookDetailsType} from "../../API/types";

let startState: bookDetailsType

const bookReducer = slice.reducer
beforeEach(() => {
    startState = {id: 'zyTCAlFPjgYC',
        volumeInfo: {
        title: 'The Google Story (2018 Updated Edition)',
            authors: [
                "David A. Vise",
                "Mark Malseed"
            ],
            publisher: '',
            publishedDate: '12/06/2022',
            printType: 'book',
            mainCategory: 'Business & Economics',
            categories: ["Business & Economics / Entrepreneurship",
                "Computers / Information Technology"],
            description: 'The definitive, bestselling account of the company that changed the way we work and live',
            imageLinks: {
            smallThumbnail: 'http://books.google.com',
                thumbnail: 'http://books.google.com',
                small: 'http://books.google.com',
                medium: 'http://books.google.com',
                large: 'http://books.google.com',
                extraLarge: 'http://books.google.com'}}}
})

test('books details should be added', () => {



    let payload = {book:startState}
    const action = showBookDetails.fulfilled(payload, 'zyTCAlFPjgYC', 'zyTCAlFPjgYC')

    const endState = bookReducer({} as bookType , action)

    expect(Object.keys(endState).length).toBe(6)
    expect(endState.title).toBe('The Google Story (2018 Updated Edition)')
})