import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action)=> {
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop(); // removing last item from cart
        },
        clearCart: (state)=>{
            state.items.length=0;
        }
    }
});

export default cartSlice.reducer;

export const {addItem, removeItem, clearCart} = cartSlice.actions;