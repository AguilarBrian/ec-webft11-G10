import React,{useEffect} from 'react';
import {
  TextField, Input, makeStyles, Card, CardContent, Typography, Grid, Button
} from '@material-ui/core/';
import { useSelector, useDispatch } from "react-redux";
import AppBar from "../../components/appBar/AppBar"
import defaultImg from "../../components/Product/productCard/ProductCard"
import SummaryCard from '../../components/Product/cart/SummaryCard';
import { setProductQuantity,getTotal,removeFromCart } from '../../store/user/user.action';
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
    paddingBottom: "0px",
    background: "white",



  },
  input: {
    paddingTop: theme.spacing(2),
  }
}));

export default function Cart() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const productQuantity = useSelector(state => state.userReducer.productQuantity)
  const productTotal = useSelector(state => state.userReducer.productTotal)

  const setQuantity = (product,e) => {

    e.target.value>0 && dispatch(setProductQuantity(product, e.target.value))
  }
  useEffect(() => {
    dispatch(getTotal(productQuantity))

    
  }, [dispatch,setQuantity,productQuantity])
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
                type="number"
                inputProps={{ min: 1, max: product.stock }}
                onChange={(e)=>setQuantity(product,e)}
                variant="outlined"
              >1</TextField>
              <p>({product.stock} disponibles)</p>
              <Button 
                     variant="contained"
                     color=""
                     onClick={()=>dispatch(removeFromCart(product.name))}
              >remove from cart</Button>

            </Grid>
          </Card>

        })


      ) : ("")
      }
    </>
  );
}
