import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { getCart } from '../../../store/user/user.action';

function CartProducts(props) {
    const dispatch = useDispatch()
    const cartFromlocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
    const [cart, setCart] = useState(cartFromlocalStorage);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))//set cart
        dispatch(getCart(cartFromlocalStorage))//get cart
    }, [cart])

    return null
    
}

export default CartProducts;