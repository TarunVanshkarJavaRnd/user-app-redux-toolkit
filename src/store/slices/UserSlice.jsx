import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name : 'user',
    initialState : [],
    reducers : {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            console.log('deleting' + action.payload);
            state.splice(action.payload, 1);   // delete from action.payload(id => index number) till one element only
        },
        deleteUser(state, action) {
            console.log('deleting all users');
            return [];
        }
    }
});

export default userSlice.reducer;

console.log(userSlice.actions)  // shows all the action ==> action creater
export const { addUser, removeUser, deleteUser } = userSlice.actions;