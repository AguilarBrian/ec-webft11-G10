import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme)=>({
    // container: {
    //     height: "100%",
    //     width: "100%",
    //     backgroundColor: "blanchedalmond",
    //     marginBottom: "40px"
    // },
    // banner: {
    //     width: "40vh",
    //     height: "50vh",
    //     borderStyle: "double",
    //     maxSidth: "100%",
    //     maxSeight: "100%",
    //     margin: "10px"
    // },
    // root: {
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     minWidth: 300,
    //     width: '100%',
    //   },
    //   image: {
    //     position: 'relative',
    //     height: 200,
    //     [theme.breakpoints.down('xs')]: {
    //       width: '100% !important', // Overrides inline-style
    //       height: 100,
    //     },
    //     '&:hover, &$focusVisible': {
    //       zIndex: 1,
    //       '& $imageBackdrop': {
    //         opacity: 0.15,
    //       },
    //       '& $imageMarked': {
    //         opacity: 0,
    //       },
    //       '& $imageTitle': {
    //         border: '4px solid currentColor',
    //       },
    //     },
    //   },
    //   focusVisible: {},
    //   imageButton: {
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     color: theme.palette.common.white,
    //   },
    //   imageSrc: {
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center 40%',
    //   },
    //   imageBackdrop: {
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     backgroundColor: theme.palette.common.black,
    //     opacity: 0.4,
    //     transition: theme.transitions.create('opacity'),
    //   },
    //   imageTitle: {
    //     position: 'relative',
    //     padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    //   },
    //   imageMarked: {
    //     height: 3,
    //     width: 18,
    //     backgroundColor: theme.palette.common.white,
    //     position: 'absolute',
    //     bottom: -2,
    //     left: 'calc(50% - 9px)',
    //     transition: theme.transitions.create('opacity'),
    //   },
    root: {
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      justifyContent: "space-evenly",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      justifyContent: "center",
      flexWrap: 'wrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    button:{

    }
}));