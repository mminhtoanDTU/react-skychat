import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedRoom: {}
}

const RoomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        setRoomInfo: (state, action) => {
            state.selectedRoom = action.payload;
        }
    },
})

export const { setRoomInfo } = RoomSlice.actions;
export default RoomSlice.reducer;