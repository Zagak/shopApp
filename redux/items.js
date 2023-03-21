import {createSlice} from '@reduxjs/toolkit';
import { buyAnItem } from '../backend/http';

const buyedItemsSlice = createSlice({
    name:'buyedItems',
    initialState:{
        ids:[]
    },
    reducers:{
        buyItem:(state,action)=>{
            state.ids.push(action.payload.id); 
        },
    }
});

export const buyItem = buyedItemsSlice.actions.buyItem;

export default buyedItemsSlice.reducer;