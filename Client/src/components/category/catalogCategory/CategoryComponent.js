import React from 'react';
import { useStyles } from './styleButton'
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import { searchProducts } from '../../../store/category/category.actions'

function CategoryComponent({ title }) {
    const dispatch = useDispatch()

    const sendCategorySearch = (title) => {
        console.log(title)
        dispatch(searchProducts(title))
    }

    const classes = useStyles();
    return (
            <Button classes={{
                root: classes.root, // class name, e.g. `classes-nesting-root-x`
                label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }} disableFocusListener title={title} onClick={() => sendCategorySearch(title)} >{!title ? 'otra categoria' : title}
            </Button>
    );
}

export default CategoryComponent;