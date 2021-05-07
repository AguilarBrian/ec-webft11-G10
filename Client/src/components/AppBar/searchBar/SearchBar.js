import React, { useState } from "react";
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from '../styles'
import { useDispatch } from 'react-redux'
import { searchProducts } from '../../../store/product/product.actions';
export const SearchBar = () => {
    const dispatch = useDispatch()

    const classes = useStyles();
    const [title, setTitle] = useState("")
    const handleChange = (event) => {
        setTitle(event.target.value);
        dispatch(searchProducts(title))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchProducts(title))

    }

    return (

        <>
            <form onSubmit={(e) => handleSubmit(e)}>

                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => handleChange(e)}
                />
            </form>
        </>
    );

}
