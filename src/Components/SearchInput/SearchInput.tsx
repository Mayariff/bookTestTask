import React from 'react';
import {IconButton, Paper} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {useAppSelector} from "../../utils/redux-utils";
import {selectStatus} from "../../BLL (business logic layer)/selectors";
import {SearchInputType} from "./type";


const SearchInput = React.memo(({value, onChange, onKeyPress, onClick}: SearchInputType) => {

    const status = useAppSelector(selectStatus)

    return (
        <Paper
            component="form"
            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 250}}>
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Search books"
                inputProps={{'aria-label': 'search books'}}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <IconButton sx={{p: '10px'}}
                        aria-label="search"
                        onClick={onClick}
                        disabled={status === 'loading'}>
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
});

export default SearchInput;