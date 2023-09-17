import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import auth from "../utility/firebase.config";
import { createUserWithEmailAndPassword, updateCurrentUser } from "firebase/auth";
const initialState = {
    name: '',
    email: '',
    error: '',
    isLoading: true,
    isError: false,

}
export const createUser = createAsyncThunk('userSlice/createUser',
    async ({email, password, name}) => {
        const data = await createUserWithEmailAndPassword(auth, email, password);
        await updateCurrentUser(auth, {
            displayName: name
        })
        return{
            email, name, password
        };

    })

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, {payload})=>{
            const user = auth.currentUser;
            if(user){
                state.email = user.email;
                state.name = user.displayName;
                state.isLoading = false;
                state.isError = false;
            }
            else{
                state.error = "User is not available"
            }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state,) =>{
            state.name = '';
            state.email = '';
            state.error = '';
            state.isLoading = true;
            state.isError = false;

        })
        .addCase(createUser.fulfilled, (state, {payload})=>{
            state.name = payload.name;
            state.email = payload.email;
            state.error = '';
            state.isLoading = false;
            state.isError = false;

        })
        .addCase(createUser.rejected, (state, actions)=>{
            state.name = '';
            state.email = '';
            state.error = actions.error.message;
            state.isLoading = false;
            state.isError = true;

        })

    },
});

export const {getUser} = userSlice.actions

export default userSlice.reducer;