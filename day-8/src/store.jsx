import counterReducer from "./counterReducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})

export default store;