import React from 'react';
import { useSelector } from "react-redux";
import { Grid } from '@material-ui/core/';
import { useStyles } from './styles'
import ProductCard from '../productCard/ProductCard'
const products = [
    {
        image: 'https://www.maxionline.ec/wp-content/uploads/2019/11/Revista-Maxi-lechon-navidenho-relleno.jpg',
        title: 'lechon',
        description: 'lechon con arroz y aceitunas',
        price: 200,
        amount: 20
    },
    {
        image: 'https://okdiario.com/img/2018/09/29/sopa-de-fideos-con-pollo.jpg',
        title: 'sopa',
        description: 'sopita de letras con cabello de angel',
        price: 600,
        amount: 15
    },
    {
        image: 'https://prod-arc.lavoz.com.ar/resizer/If_DtDzgyuxv_lLbhcKpxMbABEo=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/AHFMXJOSLJFPXJCLITDLWCW7BA.jpg',
        title: 'lomito',
        description: 'sandwich de lomo con lechuga y tomate',
        price: 450,
        amount: 23
    },
]


export default function Catalog() {    
    const classes = useStyles();
    const searchResults = useSelector(state => state.productReducer?.searchResults)
    
    return (
        <Grid container spacing={2} className={classes.container}>
            
             {searchResults ?
                   searchResults.map(food => {
                    return <Grid item xs={12} sm={4}>
                        <ProductCard
                            image={food.image}
                            name={food.name}
                            description={food.description}
                            price={food.price}
                        />
                    </Grid>
                })
                : ("no hay resutl")
            }
            {searchResults && searchResults.length===0 && (<h1>no se hallaron resultados</h1>)} */}


        </Grid>
    );
}