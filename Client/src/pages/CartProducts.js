import React from 'react';
import {
  TextField, Input, makeStyles, Card, CardContent, Typography, Grid, Button
} from '@material-ui/core/';
import { useSelector, useDispatch } from "react-redux";
import AppBar from "../components/appBar/AppBar"
import defaultImg from "../components/product/productCard/default.png"
import { countProducts } from '../store/user/user.action';
const useStyles = makeStyles((theme) => ({
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
  },
  total: {
    float: "right",
    minHeight: "507px",
    minWidth: "300px"

  },
  input: {
    paddingTop: theme.spacing(2),
  }
}));

export default function Cart() {
  const classes = useStyles();
  const dispatch = useDispatch()
  
  const cartUnique= useSelector(state => state.userReducer.productQuantity)

  
  return (
    <>
      <AppBar />
      < Card className={classes.total}  >
        <Typography variant="h5" >
          SUBTOTAL 120
             </Typography>
        <Typography variant="h5">
          SHIPPING    FREE              </Typography>
        <Button variant='contained' color='primary' >BUY</Button>
      </Card>
      {cartUnique && cartUnique.length > 0 ? (
        cartUnique.map(product => {
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
                defaultValue={1}
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
