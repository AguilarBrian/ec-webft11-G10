import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { useStyles } from './styleLogIn';


function LogIn(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            Landing Page
        </div>
    );
}

export default LogIn;