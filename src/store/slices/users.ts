import {createSlice} from "@reduxjs/toolkit";
import {UserType} from "../../shared/types/user";

type sliceState = {
    allUsers: UserType[];
    scoresHistory: number[];
    currentUser: UserType;
}

const initialState: sliceState = {
    allUsers: [],
    scoresHistory: [],
    currentUser: {name: "", bestScore: 0, currentScore: 0},
};


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser(state, action) {
            const newUser = action.payload;

            state.allUsers.push(
                {
                    name: newUser.name,
                    bestScore: 0,
                    currentScore: 0
                });

            state.currentUser.name = newUser.name;
            state.currentUser.currentScore = 0;
            state.currentUser.bestScore = 0;
        },
        sort(state) {
            state.allUsers.sort((a: UserType, b: UserType): number => {
                return (b.bestScore - a.bestScore);
            });
        },
        increaseScore(state) {

            state.allUsers.forEach((user: UserType) => {
                if (user.name === state.currentUser.name) {
                    state.currentUser.currentScore = state.currentUser.currentScore + 10;

                    if (state.currentUser.currentScore > state.currentUser.bestScore)
                        state.currentUser.bestScore = state.currentUser.currentScore;
                }
            });
        },
        initialScore(state){
            state.allUsers.forEach((user: UserType) => {
                if (user.name === state.currentUser.name) {
                    state.currentUser.currentScore = 0;
                }
            });
        },
        logout(state){
            state.allUsers.forEach((user:UserType) =>{
                if(user.name === state.currentUser.name){
                    user.bestScore = state.currentUser.bestScore;
                    user.currentScore = state.currentUser.currentScore;
                    return;
                }
            })
        }
    }
});

export const usersActions = usersSlice.actions;

export default usersSlice;