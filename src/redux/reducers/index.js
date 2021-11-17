import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./productReducer";
const reducers = combineReducers({
    Allproducts:productReducer,
    SelectedProduct:selectedProductReducer
});
export default reducers;