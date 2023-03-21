import {createSlice} from '@reduxjs/toolkit';


const buyedItemsSlice = createSlice({
    name:'buyedItems',
    initialState:{
        ids:<any>[]
    },
    reducers:{
        buyItem:(state,action)=>{
            state.ids.push(action?.payload?.id); 
        },
    }
});

export const buyItem = buyedItemsSlice.actions.buyItem;

export default buyedItemsSlice.reducer;