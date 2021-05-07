import React from 'react';
import { useStyles } from './styleCategory'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { useDispatch } from 'react-redux'
import { searchProducts } from '../../../store/category/category.actions'

function CategoryComponent({title}) {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const sendCategorySearch = (title) => {
        dispatch(searchProducts(title))
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Tooltip disableFocusListener title="Categorias de producto">
                <Button onClick={()=>sendCategorySearch(title)} >{!title ? 'otra categoria' : title}</Button>
            </Tooltip>
        </div>
    );
}

export default CategoryComponent;