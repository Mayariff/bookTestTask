import React, {ChangeEventHandler, useCallback, useEffect, useState} from 'react';
import s from './Header.module.scss'
import Filter from "../Filter/Filter";
import {fetchBooks} from "../../BLL (business logic layer)/BooksList-reducer";
import {selectParams} from "../../BLL (business logic layer)/selectors";
import {setParams} from "../../BLL (business logic layer)/Params-reducer";
import bookImg from '../../common/img/1618496604_24-phonoteka_org-p-fon-knigi-dlya-fotoshopa-28.jpg'
import {useNavigate} from "react-router-dom";
import {ROUTE} from "../../App/Router/RoutingData";
import {useAppDispatch, useAppSelector} from "../../utils/redux-utils";
import {sortByType, subjectType} from "../../API/types";
import SearchInput from "../SearchInput/SearchInput";


const Header = () => {

    const Params = useAppSelector(selectParams)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //for searching input
    const [searchingValue, setSearchingValue] = useState<string>(Params.searchingValue)
    const searchValue: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        setSearchingValue(e.currentTarget.value)
    },[setSearchingValue])
    // for searching button
    const searchBooks = useCallback(async () => {
        dispatch(fetchBooks(Params))
        navigate(ROUTE.HOME)
    }, [dispatch,navigate, Params])

    const onKeyPress: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === "Enter") {
            dispatch(fetchBooks(Params))
            navigate(ROUTE.HOME)
        }
    },[dispatch,navigate,Params])


    //select Subject
    const categories: Array<string> = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
    const [selectedSubject, setSelectedSubject] = useState<string>(categories[0])
    const selectValue = useCallback((value: string) => {
        setSelectedSubject(value)
    }, [setSelectedSubject])


    //sorting  Sorting
    const sortingBy: Array<string> = ['relevance', 'newest']
    const [selectedSorting, setSelectedSorting] = useState<sortByType>(Params.orderBy as sortByType)
    const selectSorting = useCallback((value: string) => setSelectedSorting(value as sortByType), [setSelectedSorting])


    useEffect(() => {
        dispatch(setParams(
            {
                searchingValue: searchingValue,
                orderBy: selectedSorting,
                subject: selectedSubject === 'all' ? '' : selectedSubject as subjectType,
                startIndex: Params.startIndex,
                maxResults: Params.maxResults
            }))
    }, [searchingValue, selectedSorting, selectedSubject])

    //background in css
    const image = {backgroundImage: `url(${bookImg})`}

    return (
        <header className={s.header} style={image}>
            <div className={s.container}>
                <h1>Search for books</h1>
                <div className={s.block1}>
                    <SearchInput value={searchingValue}
                                 onChange={searchValue}
                                 onKeyPress={onKeyPress}
                                 onClick={searchBooks}/>
                </div>
                <div className={s.block2}>
                    <Filter nameFilter={'categories'}
                            selectorValues={categories}
                            selectValue={selectValue}
                            value={selectedSubject}/>
                    <Filter nameFilter={'sorting by'}
                            selectorValues={sortingBy}
                            selectValue={selectSorting}
                            value={selectedSorting}/>
                </div>
            </div>
        </header>
    );
};

export default Header;