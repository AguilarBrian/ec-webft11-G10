import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core/';
import { useSelector } from "react-redux";
import AppBar from "../../components/appBar/AppBar"
import defaultImg from "../../components/product/productCard/default.png"
import { useStyles } from './styleCart'

export default function CustomCard() {
  const classes = useStyles();
  const cart = useSelector(state => state.userReducer.cart)
  return (
    <>
      <AppBar />
      {cart && cart.length > 0 ? (
        cart.map(product => {
          return <Card
            className={classes.root}
            spacing={3}
          >
            <Grid xs={2} className={classes.photo}>
              <img height="140" src={product.img==="no tiene" ? defaultImg : product.img}></img>
            </Grid>
            <Grid xs={8} className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h4" variant="h4">
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Grid>
            <Grid xs={2} className={classes.container}>
              <Typography component="h4" variant="h4">
                ${product.price}
              </Typography>
            </Grid>
          </Card>
        })
      ) : ("")
      }
    </>
  );
}
