import React from 'react';
import AppBar from '../../components/appBar/AppBar'
import OrderView from '../../components/admin/OrderView'

function PageCheckoutOrders(props) {
    return (
        <div>
            <AppBar/>
            <OrderView/>
        </div>
    );
}

export default PageCheckoutOrders;