import { configureStore } from "@reduxjs/toolkit";
import buyedItemsReducer from './items';

export const store = configureStore({
    reducer: {
        ownedItems: buyedItemsReducer
    }
});