import React from 'react';
import { Card, CardContent, Typography, Grid,TextField } from '@material-ui/core/';
import { useSelector } from "react-redux";
import AppBar from "../../components/appBar/AppBar"
import defaultImg from "../../components/Product/productCard/default.png"
import SummaryCard from "../../components/Product/cart/SummaryCard"
import { useStyles } from './styleCart'

export default function Cart() {
  const classes = useStyles();

  const productQuantity = useSelector(state => state.userReducer.productQuantity)

  return (
    <>
      <AppBar />
      <Card className={classes.total}  >
        <SummaryCard />
      </Card>
      {productQuantity && productQuantity.length > 0 ? (
        productQuantity.map(product => {
          return <Card
            className={classes.root}
          >
            <Grid xs={2} className={classes.photo}>
              <img height="140" src={product.img === "no tiene" ? defaultImg : product.img}></img>
            </Grid>
            <Grid xs={6} className={classes.details}>
              <CardContent
                className={classes.content}>
                <Typography component="h4" variant="h4" >
                  {product.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h5">
                  ${product.price}
                </Typography>
              </CardContent>
            </Grid>

            <Grid className={classes.input} xs={2}>
              <Typography component="h3" variant="h6">
                Cantidad:
              </Typography>
              <TextField
                defaultValue={product.quantity}
                id="outlined-number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ min: 1, max: 10 }}

                variant="outlined"
              >1</TextField>

            </Grid>
          </Card>

        })


      ) : ("")
      }
    </>
  );
}
