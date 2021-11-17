import React,{useEffect} from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import ProductsComponent from "./ProductComponent";
import {setProducts} from "../redux/actions/productActions";

const ProductsList = ()=>{
    const products = useSelector((state)=>state.Allproducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((error)=>{
            console.log("error",error);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(()=>{
        fetchProducts();
    },[])
    
    return(
        <div className="ui grid container">
            <ProductsComponent/>
        </div>
    )
}
export default ProductsList;