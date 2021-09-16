import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalFriends: false,
    isShowInfoBar: false,
    isShowMessage: false,
    isLoading: false
}


const ControlSlice = createSlice({
    name: 'control',
    initialState,
    reducers: {
        resetControl: () => initialState,
        toggleModalFriends: (state, action) => {
            state.isModalFriends = action.payload;
        },
        toggleInfoBar: (state, action) => {
            state.isShowInfoBar = action.payload;
        },
        toggleContentMessage: (state, action) => {
            state.isShowMessage = action.payload;
        },
        toggleLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const {
    toggleModalFriends,
    toggleInfoBar,
    toggleContentMessage,
    toggleLoading,
    resetControl
} = ControlSlice.actions;
export default ControlSlice.reducer;

