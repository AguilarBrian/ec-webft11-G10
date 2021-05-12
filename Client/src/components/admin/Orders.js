import React,{useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {getOrderByUserId} from "../../store/order/order.action";
import {getUsersById} from "../../store/user/user.action"

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
   
    // dispatch(getAllOrders())
    dispatch(getOrderByUserId(1))
    dispatch(getUsersById(1))
   
 }, [])

 const  orders  = useSelector((state) => state.orderReducer?.ordersUser);
 const ordersuser= useSelector((state) => state.userReducer?.users);
   console.log("fijate esto que es el user",ordersuser)


  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Metodo de Pago</TableCell>
            <TableCell align="right">Total compra</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {orders.map((row) => (
            <TableRow key={row.id}>
              <TableCell><NavLink to="/ViewOrder">{row.id}</NavLink></TableCell>
              <TableCell><NavLink to="/ViewOrder">19 de septiembre</NavLink></TableCell>
              <TableCell><NavLink to="/ViewOrder">{ordersuser.name}</NavLink></TableCell>
              <TableCell><NavLink to="/ViewOrder">{ordersuser.surname}</NavLink></TableCell>
              <TableCell><NavLink to="/ViewOrder">{ordersuser.email}</NavLink></TableCell>
              <TableCell><NavLink to="/ViewOrder">VISA ⠀•••• 3719</NavLink></TableCell>
              <TableCell  align="right"><NavLink to="/ViewOrder">{row.price}</NavLink></TableCell>
              
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