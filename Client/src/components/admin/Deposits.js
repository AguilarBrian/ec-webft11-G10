import React,{useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { useSelector, useDispatch } from "react-redux";
import {getAllOrders} from "../../store/order/order.action"


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});


export default function Deposits({amounts}) {

  // const amount  = useSelector((state) => state.orderReducer?.);
  const dispatch = useDispatch();

  const amount = useSelector(state => state.orderReducer?.orders)
  // const products = useSelector(state => state.productReducer?.products)
  console.log("esto es amount ",amount);

  useEffect(() => {
   
     dispatch(getAllOrders())
    
  }, [])

  const classes = useStyles();
  return (
    
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
      ${amounts}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}