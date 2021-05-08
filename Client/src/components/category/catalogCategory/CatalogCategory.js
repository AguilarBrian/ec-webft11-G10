import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CategoryComponent from './CategoryComponent'
import { useDispatch, useSelector } from 'react-redux'
import {getCategory}  from '../../../store/category/category.actions'
import { useStyles } from './styleCategory'
import GridList from '@material-ui/core/GridList';

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

export default function CatalogComponent() {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.categoryReducer.category)

    const checkCategory = (categories) => {
        if(categories&&categories[0]){
            let categoryList=[]
            for (let i in categories){                
                if(categoryList.find(e=>e===categories[i].name)){
                    continue
                }else{
                    categoryList.push(categories[i].name)
                }
            }   
            return categoryList
        }
    }

    let categoryList=checkCategory(categories)

    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch]);  
    
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {(!categories || !categories[0])?(
            <GridList className={classes.gridList} cols={2.5}>                
                {category.map(category => {
                        return <CategoryComponent title={category.title} />
                    })
                }                
            </GridList>
            ):(
            <GridList className={classes.gridList} cols={2.5}>                
                {categories && categories[0] &&
                    categoryList.map(categoryList => {
                        return <CategoryComponent title={categoryList} />
                    })                   
                }                
            </GridList>
            )}
        </div>
    );
}
