import {catalogBookType} from "../BLL (business logic layer)/types";


export const CreateBooks = (booksList: catalogBookType[]) => {
  return  booksList.map((b) => ({
        itemID: b.id,
        title: b.volumeInfo.title,
        imageLinks: {
            thumbnail: b.volumeInfo.imageLinks?.thumbnail},
        authors: b.volumeInfo.authors,
        categories: b.volumeInfo.categories
    }))
};

