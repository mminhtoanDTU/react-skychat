import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../firebase/configFirebase';

const initialState = {
    userInfo: {},
    isLoading: false,
    isLogin: false,
    isOpenSetting: false,
    error: ''
}

export const getStoreUser = createAsyncThunk('users/getStoreUser', async (uid) => {
    return await new Promise((resolve, reject) => {
        db.collection("users")
            .where('uid', '==', uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(doc => {
                    resolve({ ...doc.data(), docId: doc.id })
                })
            })
            .catch(error => {
                console.log("Error getting document:", error);
            })
    })
})

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSetUser: (state, action) => {
            const newUser = {
                userInfo: action.payload,
                isLogin: true
            };
            return state = newUser;
        },
        logoutRemoveUser: (state) => {
            const newUser = {
                userInfo: {},
                isLogin: false
            }
            return state = newUser;
        },
        addNewFriends: (state, action) => {
            state.userInfo.friendIds = [...state.userInfo.friendIds, action.payload]
        },


    },
    extraReducers: {
        [getStoreUser.pending]: (state) => {
            state.isLoading = true
        },
        [getStoreUser.rejected]: (state) => {
            state.isLoading = false;
            state.error = 'Oop. Error'
        },
        [getStoreUser.fulfilled]: (state, action) => {
            const newInfoUser = {
                userInfo: action.payload,
                isLogin: true,
                isLoading: false
            }
            return state = newInfoUser;
        }
    },
})

export const { loginSetUser, logoutRemoveUser, addNewFriends } = UserSlice.actions;
export default UserSlice.reducer;