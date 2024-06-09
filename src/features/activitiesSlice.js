import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    completedActivities:[{id:1, name:"Gurpreet Singh",load:"Load No. I-I-AAA-1325",content:" (Dispatch team) has created "},{id:2,name:"Aman (Driver)",content:" Picked Up goods at Location_Name for ",load:"Load No. I-I-AAA-1325"},{id:3,name:"Gurpreet Singh",content:"  (Dispatch team) has created ",load:"Load No. I-I-AAA-1325"},{id:4,name:"Gurpreet Singh",content:" will start added by",load:" Load No. I-I-AAA-1325"}],
    scheduledActivities:[{id:1,load:"Load No. I-I-AAA-1325",content:" will be delivered by ",name:"Aman (Driver)"},{id:2,name:"Aman (Driver)",content:" will Picked Up goods at Location_Name for ",load:"Load No. I-I-AAA-1325"},{id:3,name:"Load No. I-I-AAA-1325",load:"Gurpreet Singh",content:" will start added by "},{id:4,load:"Load No. I-I-AAA-1325",content:" will start added by ",name:"Gurpreet Singh"}]
}

export const activitySlice=createSlice({
    name:'activites',
    initialState,
    reducers:{
        completeActivity:(state,action)=>{
             state.scheduledActivities=state.scheduledActivities.filter((element)=>element.id!=action.payload.id);
             state.completedActivities=state.completedActivities.push({id:nanoid,content:action.payload.content,load:action.payload.load,name:action.payload.name})
        },
        scheduleActivity:(state,action)=>{
            state.scheduledActivities=state.scheduledActivities.push({id:nanoid,content:action.payload.content,load:action.payload.load,name:action.payload.name});
        }
    }
})

export const {completeActivity,scheduleActivity}=activitySlice.actions;
export default activitySlice.reducer;
