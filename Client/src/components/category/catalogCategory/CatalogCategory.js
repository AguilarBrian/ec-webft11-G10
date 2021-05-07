import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CategoryComponent from './CategoryComponent'
import { useDispatch, useSelector } from 'react-redux'
import {getCategory}  from '../../../store/category/category.actions'

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
    const categories = useSelector(state => state.categoryReducers.category)

    const checkCategory = (categories) => {
        if(categories&&categories[0]){
            let categoryList=[]
            for (let i in categories){                
                if(categoryList.find(e=>e==categories[i].name)){
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
        const interval = setInterval(() =>dispatch(getCategory()), 2500)        
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if(categories[0]){
            const interval = setInterval(() =>console.log('categories------>',categoryList), 2500)
            console.log()
            return () => clearInterval(interval);
        }
    }, []);    
    
    return (
        <div>
            {(!categories || !categories[0])?(
            <Grid container justify="center">                
                {category.map(category => {
                        return <Grid item>
                            <CategoryComponent title={category.title} />
                        </Grid>
                    })
                }                
            </Grid>
            ):(
            <Grid container justify="center">                
                {categories && categories[0] &&
                    categoryList.map(categoryList => {
                        return <Grid item>
                            <CategoryComponent title={categoryList} />
                        </Grid>
                    })                   
                }                
            </Grid>
            )}
        </div>
    );
}
