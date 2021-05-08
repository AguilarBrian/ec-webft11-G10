import React from 'react';
import { useStyles } from './styleCategory'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import { searchProducts } from '../../../store/category/category.actions'

function CategoryComponent({title}) {
    const dispatch = useDispatch()

    const sendCategorySearch = (title) => {
        console.log(title)
        dispatch(searchProducts(title))
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {<Button className={classes.title} disableFocusListener title={title} onClick={()=>sendCategorySearch(title)} >{!title ? 'otra categoria' : title}
            </Button>}
        </div>
    );
}

export default CategoryComponent;