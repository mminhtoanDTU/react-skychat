import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalFriends: false,
}


const ControlSlice = createSlice({
    name: 'control',
    initialState,
    reducers: {
        openModalFriends: (state) => {
            state.isModalFriends = true;
        },
        closeModalFriends: (state) => {
            state.isModalFriends = false;
        }
    }
})

export const { openModalFriends, closeModalFriends } = ControlSlice.actions;
export default ControlSlice.reducer;

