import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    orders:[{tittle:"Orders", c1:"Upcoming",v1:50,c2:"Ongoing",v2:100,c3:"Completed",v3:"50"},{tittle:"Trips", c1:"Upcoming",v1:50,c2:"Ongoing",v2:100,c3:"Completed",v3:"50"},
        {tittle:"Revenues", c1:"Upcoming",v1:50,c2:"Ongoing",v2:100,c3:"Completed",v3:"50"},{tittle:"Expenses", c1:"Freight Charge",v1:50,c2:"Driver Charge",v2:100,c3:"Other Charges",v3:"50"}
    ]
}

const orderSlice=createSlice({
    name:'orders',
    initialState,
    reducers:{
        operation1:(state,action)=>{

        },
        operation2:(state,action)=>{

        }
    }

})

export const {operation1,operation2}=orderSlice.actions;
export default orderSlice.reducer;