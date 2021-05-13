import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: "9px",//border
        minHeight: "160px",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        paddingTop: theme.spacing(2),
    },
    photo: {
        minWidth: "240px",
    }
}));