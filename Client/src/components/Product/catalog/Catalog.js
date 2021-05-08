import React from 'react';
import { useSelector } from "react-redux";
import { Grid } from '@material-ui/core/';
import { useStyles } from './styles'
import ProductCard from '../productCard/ProductCard'

export default function Catalog() {
    const classes = useStyles();
    const searchResults = useSelector(state => state.productReducer?.searchResults)
    const products = useSelector(state => state.productReducer?.products)

    return (
        <div>
            ((<Grid container spacing={2} className={classes.container}>
                {(products.length == 0) ? (
                    <div>SPINNER</div>
                ) : ((searchResults.length == 0) ?
                    (products.map(food => {
                        return <Grid item xs={12} sm={4} md={3}>
                            <ProductCard id={food.id} image={food.image} name={food.name} description={food.description} price={food.price}
                            /> </Grid>
                    })) : (searchResults.map(food => {
                        return <Grid item xs={12} sm={4} md={3}>
                            <ProductCard id={food.id} image={food.image} name={food.name} description={food.description} price={food.price}
                            /> </Grid>
                    }))
                )}
            </Grid>))
        </div>
    );
}
