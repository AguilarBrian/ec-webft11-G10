import React from 'react';
import Grid from '@material-ui/core/Grid';
import CategoryComponent from './CategoryComponent'

const category = [
    {
        title: 'Pizzas',
        description: 'Comida para llevar y comer facil',
    },
    {
        title: 'Pastas',
        description: 'Comida al plato',
    },
    {
        title: 'Postres',
        description: 'Comidas dulces',
    },
]

export default function CatatalogComponent() {

    return (
        <div>
            <Grid container justify="center">                
                {
                    category.map(category => {
                        return <Grid item>
                            <CategoryComponent title={category.title} />
                        </Grid>
                    })
                }                
            </Grid>
        </div>
    );
}
