import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        email: "",
        isLogin: false
    },
    reducers: {
        login: (state: any, action: any) => {
            state.email = action.payload.email;
            state.isLogin = true;
        },

        logout: (state: any) => {
            state.email = "";
            state.isLogin = false
        }
    }
})

export const  {login, logout} = authSlice.actions;

export default authSlice.reducer;