import {configureStore} from "@reduxjs/toolkit";
import resortSlice from "./reducer/resortReducer";
import bucketSlice from "./reducer/BucketReducer";
const store= configureStore({
    reducer:{
        resort: resortSlice.reducer,
        bucket: bucketSlice.reducer
    }
})
export default store