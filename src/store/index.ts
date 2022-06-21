import {configureStore} from "@reduxjs/toolkit";
import usersSlice from "./slices/users";


const store = configureStore({
    reducer: {users: usersSlice.reducer}
});

export default store;