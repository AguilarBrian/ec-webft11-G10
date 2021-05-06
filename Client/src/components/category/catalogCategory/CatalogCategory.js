import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CategoryComponent from './CategoryComponent'
import { useDispatch, useSelector } from 'react-redux'
import {postCategory} from '../../../store/category/category.actions'

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

    const dispatch = useDispatch()
    const categories = useSelector(state => state.category)
    const categoriesErrorBadRequest = useSelector(state => state.categoryError)

    const printReducer = () => {
        console.log(categories)
    }

    useEffect(() => {
        const interval = setInterval(() =>dispatch(postCategory()), 2500);
        printReducer()
        return () => clearInterval(interval);
    }, [dispatch]);

    
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
