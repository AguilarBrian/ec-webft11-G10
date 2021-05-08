import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme)=>({
    root: {
        background: 'linear-gradient(45deg, #6b90fe5e 0%, #ff53d000 100%)',
        borderRadius: 3,
        border: 0,
        color: 'black',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
        margin: '10px'
      },
      label: {
        textTransform: 'capitalize',
      },
}))