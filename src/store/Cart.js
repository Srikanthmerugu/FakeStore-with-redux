import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:"cart",
    initialState:{cartItem:[]},
    reducers:{
        setcartItem:(state,action)=>(
            state.cartItem=action.payload
        )
    }
})

export const{setcartItem}= cartSlice.actions
export const selectCartItem=(state)=>state.cart.cartItem
export default cartSlice.reducer
