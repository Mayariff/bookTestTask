import React from 'react';
import s from './Item.module.scss'
import noPhoto from '../../common/img/pfoto.png'
import {Link} from "react-router-dom";
import {ROUTE} from "../../App/Router/RoutingData";
import {itemType} from "../Filter/type";


const Item = ({book, id}: itemType) => {

    const category = book.categories ? book.categories[0] : null
    const image = {backgroundImage: `url(${book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noPhoto})`}
    const authors = book.authors?.join('').length > 40 ? book.authors.toString().slice(0, 28) + '...' : book.authors
    const title = book.title.length > 40 ? book.title.slice(0, 38) + '...' : book.title


    return (<Link to={ROUTE.CATALOG + `/${id}`}>
            <div className={s.container}>
                <div className={s.img} style={image}> </div>
                <div className={s.info}>
                    <div>{category}</div>
                    <h3> {title}</h3>
                    <div> {authors} </div>
                </div>
            </div>
        </Link>
    );
};

export default Item;