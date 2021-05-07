import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import AppBar from '../components/AppBar/AppBar'
import Catalog from '../components/Product/catalog/Catalog';
import CategoryCatalog from '../components/category/catalogCategory/CatalogCategory'
import { getProducts } from "../store/product/product.actions"


export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <div>
            <AppBar />
            <div>
                {/* <CategoryCatalog /> */}
                <Catalog />
            </div>
        </div>
    )
}