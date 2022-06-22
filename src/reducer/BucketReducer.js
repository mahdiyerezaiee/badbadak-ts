import { createSlice} from "@reduxjs/toolkit";
const bucketSlice = createSlice({
    name: 'bucket',
    initialState:{
        itemsList:[],
        totalQuantity:0,
        showCart:false,

    },
    reducers:{
        addToBucket(state , action){
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item)=> item.id === newItem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;

            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice:newItem.price,
                    name: newItem.name,
                    image: newItem.image
                });
                state.totalQuantity++;
            }
        },
        minusFromCart(state , action){
            const id =action.payload;
            const existingItem = state.itemsList.find(item => item.id === id);
            if (existingItem.quantity === 1){
                state.itemsList = state.itemsList.filter((item)=> item.id !== id);
                state.totalQuantity --;

            }else {
                existingItem.quantity --;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        delete(state , action){
            const id =action.payload;
            state.itemsList = state.itemsList.filter((item)=> item.id !== id);
            state.totalQuantity --;

        }
    }
});
export const bucketActions =bucketSlice.actions;
export default bucketSlice;