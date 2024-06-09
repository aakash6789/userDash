import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from "../features/activitiesSlice.js";
import ordersReducer from "../features/ordersSlice.js"
export const store=configureStore({
    reducer:{
        activities: activitiesReducer,
        orders:ordersReducer
      }
})