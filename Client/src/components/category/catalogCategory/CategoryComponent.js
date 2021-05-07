import React from 'react';
import { useStyles } from './styleCategory'
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

function CategoryComponent({title}) {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    const classes = useStyles();
    return (
        <div >
            <Tooltip disableFocusListener title="Categorias de producto">
                <Button className={classes.banner}>{!title ? 'otra categoria' : title}</Button>
            </Tooltip>
        </div>
    );
}

export default CategoryComponent;