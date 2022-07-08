import noPhoto from "../common/img/pfoto.png";
import {bookType} from "../BLL (business logic layer)/types";

export const findImg=(book: bookType)=>{
    if (book?.imageLinks?.medium){
        return  book?.imageLinks?.medium
    } else if(book?.imageLinks?.large){
        return book?.imageLinks?.large
    }else if(book?.imageLinks?.small){
        return book?.imageLinks?.small
    }else if(book?.imageLinks?.extraLarge) {
        return book?.imageLinks?.extraLarge
    }else{
        return noPhoto
    }
}
