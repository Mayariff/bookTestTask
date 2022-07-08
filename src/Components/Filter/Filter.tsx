import React from 'react';
import s from './Filter.module.scss'
import {FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";

type propsType = {
    nameFilter: string,
    selectorValues: Array<string>
    selectValue: (value: string) => void
    value: string
}


const Filter = React.memo(({nameFilter, selectorValues, selectValue, value}: propsType) => {


    const onChangeHandler = (e: SelectChangeEvent) => {
        selectValue(e.target.value)
    }

    return (
        <div className={s.filter}>
            <div>{nameFilter}</div>
            <div>
                <FormControl fullWidth sx={{m: 1, minWidth: 120,}} size="small" >
                    <Select style={{backgroundColor: "white"}}
                            labelId={nameFilter}
                            id={nameFilter}
                            value={value}
                            onChange={onChangeHandler}>
                        {selectorValues.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
});

export default Filter;