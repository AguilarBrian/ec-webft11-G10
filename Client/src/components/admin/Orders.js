import React, { useEffect, useState } from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getOrderByUserId,getAllOrders } from "../../store/order/order.action";
import { getUsers, getUsersById } from "../../store/user/user.action"
import Button from '@material-ui/core/Button';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}
// const rows = [
//   createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
//   createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
//   createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
// ];





// const amounts = rows.reduce((ac,e)=> ac+e.amount,0)





function preventDefault(event) {
  event.preventDefault();
}


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();


  const dispatch = useDispatch();



  useEffect(() => {

    dispatch(getAllOrders())
    // dispatch(getOrderByUserId(1))
    // dispatch(getUsersById(1))
    // dispatch(getUsers())

  }, [])

  const orders = useSelector((state) => state.orderReducer?.orders);
  // const user = useSelector((state) => state.userReducer?.user);
  console.log("esto me trae orders", orders)


  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Metodo de Pago</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell align="right">Total compra</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow key={row.userId}>
              <TableCell>{row.userId}</TableCell>
              <TableCell>{row.user.name}</TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.updatedAt}</TableCell>
              <TableCell>VISA ⠀•••• 3719</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <Button variant="contained" color="primary" to={`/ViewOrder/${row.userId}`} component={Link}>
                Link
              </Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}