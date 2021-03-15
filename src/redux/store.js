import { createStore, applyMiddleware } from "redux";
import { addTodo } from "./reducer/addTodo.reducer";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
export const store = createStore(addTodo, applyMiddleware(logger));
export default configureStore({
    reducer:{
        user: userReducer,
    }
})