import {createSlice} from "@reduxjs/toolkit";
import resort from "../resorts.json";

const initialState = {
    resorts: resort,
}
const resortSlice = createSlice({
    name: 'resort',
    initialState,
    reducers: {
        resortsList(state, action) {
            state.resorts = action.payload

        }
    }

});
export const resortActions = resortSlice.actions;
export default resortSlice;