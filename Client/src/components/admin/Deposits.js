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



  useEffect(() => {
   
     dispatch(getAllOrders())
    
  }, [dispatch])
   


  const amount = useSelector(state => state.orderReducer?.orders)
  const amount2 = amount.filter(e=>e.state!=="cancelada")
  const deposits= amount2.reduce( (ac,e)=>ac+e.price,0)

  console.log("deposits",deposits)
  const date =new Date()
  const classes = useStyles();
  return (
    
    <React.Fragment>
      <Title>Total Ventas</Title>
      <Typography component="p" variant="h4">
      ${deposits}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext} >
        {amount2[0].updatedAt}
      </Typography>
    </React.Fragment>
  );
}