import React from 'react';
import { useSelector } from "react-redux";
import { Grid } from '@material-ui/core/';
import { useStyles } from './styles'
import ProductCard from '../productCard/ProductCard'


export default function Catalog() {    
    const products = useSelector(state => state.productReducer.products)
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.container}>
            {products ? products.map(food => {
                return <Grid item xs={12} sm={4} md={3}>
                    <ProductCard
                        img={food.img}
                        name={food.name}
                        description={food.description}
                        price={food.price}
                    />
                </Grid>
            }) : null }
        </Grid>
    );
}