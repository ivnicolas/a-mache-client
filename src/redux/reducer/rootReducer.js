import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { subcategoryReducer } from "./subcategoryReducer";
import { postReducer } from "./postReducer";

export const rootReducer = combineReducers({
    category: categoryReducer, 
    subcategory: subcategoryReducer, 
    post: postReducer

})