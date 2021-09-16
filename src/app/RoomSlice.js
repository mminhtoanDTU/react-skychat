import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../services";


const initialState = {
    rooms: getLocalStorage('rooms') || [],
    selectedRoom: {},
    hasSender: '',
    hasReply: 0
}

const RoomSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        resetRooms: (state) => {
            state.rooms = [];
            state.selectedRoom = {};
            state.hasReply = 0;
        },
        setRooms: (state, action) => {
            const newState = [
                ...state.rooms,
                action.payload
            ]
            state.rooms = newState;
        },
        setRoomInfo: (state, action) => {
            state.selectedRoom = action.payload;
        },
        inputChange: (state, action) => {
            state.hasSender = action.payload;
        },
        replyChange: (state, action) => {
            state.hasReply = action.payload;
        }
    },
})

export const { resetRooms, setRoomInfo,
    setRooms, inputChange, replyChange } = RoomSlice.actions;
export default RoomSlice.reducer;