import React, {MouseEventHandler, useEffect} from 'react';
import {
    selectBooksList,
    selectBooksTotalItems,
    selectParams,
    selectStatus
} from "../../BLL (business logic layer)/selectors";
import {setParams} from "../../BLL (business logic layer)/Params-reducer";
import {addNewBatchBooks, fetchBooks} from "../../BLL (business logic layer)/BooksList-reducer";
import s from './MainPage.module.scss'
import Item from "../../Components/Item/Item";
import {Button, CircularProgress} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../utils/redux-utils";
import {CreateBooks} from "../../utils/createBooks";


const MainPage = () => {

    const dispatch = useAppDispatch()
    const booksList = useAppSelector(selectBooksList)
    const booksTotalItems = useAppSelector(selectBooksTotalItems)
    const params = useAppSelector(selectParams)
    const status = useAppSelector(selectStatus)


    const loadMore: MouseEventHandler<HTMLButtonElement> = async (e) => {
        const newBatch = params.startIndex + params.maxResults
        await dispatch(setParams({...params, startIndex: newBatch}))
        dispatch(addNewBatchBooks(params))
    }

    useEffect(() => {
        dispatch(fetchBooks(params))
    }, [])

    const books = booksList && CreateBooks(booksList)


    return (
        <div className={s.container}>
            <div className={s.results}>Found {booksTotalItems} results</div>
            <div className={s.items}>
                {
                    books ? books.map((b, i) => <Item book={b} id={b.itemID} key={b.itemID + i}/>) :
                        <div> not found </div>
                }

            </div>
            {status === 'loading' ? <CircularProgress/> :
                booksTotalItems > params.maxResults &&
                <Button disabled={status === 'loading' || books.length >= booksTotalItems}
                        onClick={loadMore}> Load More</Button>
            }
        </div>
    );
};

export default MainPage;


