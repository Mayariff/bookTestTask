import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {selectError} from "../../BLL (business logic layer)/selectors";
import {Snackbar} from "@mui/material";
import {setAppError} from "../../BLL (business logic layer)/App-reducer";
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useAppSelector} from "../../utils/redux-utils";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export function ErrorSnackbar() {
    const error = useAppSelector(selectError);
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        error && setOpen(true)
    }, [error])


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setAppError({error: null}));
        setOpen(false)
    }


    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
}