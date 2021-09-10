import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import UserReducer from './UserSlice';
import RoomReducer from './RoomSlice';
import ControlReducer from './ControlSlice';


const rootReducer = {
    user: UserReducer,
    rooms: RoomReducer,
    control: ControlReducer
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
})