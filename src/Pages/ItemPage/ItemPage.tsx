import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {selectBook, selectStatus} from "../../BLL (business logic layer)/selectors";
import {showBookDetails} from "../../BLL (business logic layer)/Book-reducer";
import s from './ItemPage.module.scss'
import {findImg} from "../../utils/findBook";
import {Button} from "@mui/material";
import {ROUTE} from "../../App/Router/RoutingData";
import {useAppDispatch, useAppSelector} from "../../utils/redux-utils";


const ItemPage = () => {

    const {itemID} = useParams()
    const dispatch = useAppDispatch()
    const book = useAppSelector(selectBook)
    const status = useAppSelector(selectStatus)
    const navigate = useNavigate()

    useEffect(() => {
        itemID && dispatch(showBookDetails(itemID))
    }, [])

    // book cover for css
    const image = {backgroundImage: `url(${findImg(book)})`}

    // btn goBack
    const goBack = () => navigate(ROUTE.HOME)

    // book description
    const description = book.description?.length ? book.description.replace(/<\/?[a-zA-Z]+>/gi, '') : 'There is no description'


    return (
        <div className={s.container}>
            <div className={s.button}>
                <Button disabled={status === 'loading'} onClick={goBack}>Go Back</Button>
            </div>

            <div className={s.imgContainer}>
                <div className={s.img} style={image}> </div>
            </div>

            <div className={s.info}>
                <span className={s.categories}> {book.categories}</span>
                <h1 className={s.title}>{book.title}</h1>
                <span className={s.authors}> {book.authors}</span>
                <div className={s.description}>{description}</div>
            </div>
        </div>
    );
};

export default ItemPage;