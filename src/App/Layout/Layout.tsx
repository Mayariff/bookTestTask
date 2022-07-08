import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from "../../Components/Header/Header";
import s from './Layout.module.scss'
import {selectError, selectStatus} from "../../BLL (business logic layer)/selectors";
import {CircularProgress, LinearProgress} from "@mui/material";
import {ErrorSnackbar} from "../../Components/ErrorSnackbar/ErrorSnackbar";
import {useAppSelector} from "../../utils/redux-utils";

const Layout = () => {

    const status = useAppSelector(selectStatus)
    const error = useAppSelector(selectError)


    return (
        <div className={s.layout}>
            <Header/>
            {status==='loading' &&
            <div className={s.LinearProgress}>
              <LinearProgress />
            </div>}
            <div className={s.container}>
                 <Outlet />
                {error && <ErrorSnackbar />}
            </div>
        </div>
    );
};

export default Layout;