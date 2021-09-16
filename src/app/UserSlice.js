import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../services';

const initUser = getLocalStorage('userInfo') || {
    uid: 'sky00',
    displayName: '',
    photoURL: '/static/media/bear.8f109084.png',
};

const initialState = {
    userInfo: {
        ...initUser,
        friendIds: getLocalStorage('friendIds') || []
    },
    isLogin: getLocalStorage('isLogin') || false,
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetUser: (state) => {
            state.userInfo.friendIds = []
        },
        loginSetUser: (state, action) => {
            const newUser = {
                userInfo: {
                    ...state.userInfo,
                    displayName: action.payload
                },
                isLogin: true
            };
            return state = newUser;
        },
        logoutUser: (state, action) => {
            state.isLogin = action.payload;
        },
        addNewFriends: (state, action) => {
            state.userInfo.friendIds = [...state.userInfo.friendIds, action.payload]
        },
        setAvatar: (state, action) => {
            state.userInfo.photoURL = action.payload;
        },


    },
})

export const { resetUser, loginSetUser, logoutUser,
    addNewFriends, setAvatar } = UserSlice.actions;
export default UserSlice.reducer;