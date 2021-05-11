import React from 'react';
import AppBar from '../../components/appBar/AppBar'
import AddProduct from '../../components/Product/AddProduct'

function PageAddProduct(props) {
    return (
        <div>
            <AppBar/>
            <AddProduct/>
        </div>
    );
}

export default PageAddProduct;