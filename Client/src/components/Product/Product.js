import React from 'react';
import { Grid, Typography, Divider, Button, Box } from '@material-ui/core/';
import { useStyles } from './styles'


import defaultImg from './default.png'


export default function Product({ image, title, description, price, amount }) {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.container} >
        <Grid item sm={6}>
            <img src={!image ? defaultImg : image} alt='Food' className={classes.media} />
        </Grid>
        <Grid item sm={'auto'}>
            <Grid container direction='column' className={classes.info}>
                <Box mt={2}>
                    <Typography variant='h4'>{!title ? 'Some food' : title}</Typography>
                    <Divider/>
                    <Typography variant='subtitle1'>{!description ? 'Food is great to eat, it makes you healthy! Sometimes...' : description}</Typography>
                    <Typography variant='h5'>${!price ? 150 : price}</Typography>
                    <Typography variant='h6'>{!amount ? 10 : amount}</Typography>
                </Box>
                <Button variant='contained' color='primary' className={classes.button}>Purchase</Button>
            </Grid>
        </Grid>
    </Grid>
  );
}