import { createSlice } from "@reduxjs/toolkit";

const visitedSlice = createSlice({
    name: 'visited',
    initialState: {visited:[], showVisited:[]},
    reducers:{
        userActivity(state, action){
            state.visited.push(action.payload);
           localStorage.setItem('visited', JSON.stringify(state.visited));
        },
        showActivity(state, action){
            state.showVisited = JSON.parse(localStorage.getItem('visited'));
        }
    }
})

export const visitedAction = visitedSlice.actions;
export default visitedSlice.reducer;