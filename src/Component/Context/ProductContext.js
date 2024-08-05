import axios from "axios";
import reducer from "../Reducer/ProductReducer";
import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();

const API ="http://localhost:3001/cardata";
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading:false,
    singleProduct: {},
};


const AppProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialState);


const getProduct= async (url) => {
    dispatch({type:"SET_LOADING"});
try {
    const res = await axios.get(url);
    const products = await res.data;
    console.log(products)
    dispatch({type: "SET_API_DATA", payload: products});
} catch (error) {
    dispatch({ type: "API_ERROR"});
}
};



const getSingleProduct = async (url) => {
    dispatch({type:"SET_SINGLE_LOADING"});
    try{
        const res = await axios.get(url);
        const singleProduct = await res.data;
        dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct});

    } catch (error){
        dispatch({ type: "SET_SINGLE_ERROR"});
    }
};



let base_url = process.env.REACT_APP_BASE_URL;
let public_url = process.env.PUBLIC_URL;
    
useEffect (() => {
getProduct(API);
}, []);


    return(
        <AppContext.Provider value={{ ...state, getSingleProduct, base_url, public_url }}>
            {children}
        </AppContext.Provider>
    );
};

const useProductContext = () =>{
    return useContext(AppContext);
};

export {AppProvider, AppContext, useProductContext};