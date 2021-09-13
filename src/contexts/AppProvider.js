import React, { createContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import useFirestore from '../hooks/useFirestore';

export const AppContext = createContext()

function AppProvider({ children }) {
    const { userInfo: { uid } } = useSelector(state => state.user);

    //Listen on users
    const usersCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: '!=',
            compareValue: uid,
        };
    }, [uid])
    const allUsers = useFirestore("users", usersCondition);

    //Listen on rooms
    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        };
    }, [uid]);
    const rooms = useFirestore("rooms", roomsCondition, { field: 'createdAt', isDesc: true });

    return (
        <AppContext.Provider value={{ rooms, allUsers }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;