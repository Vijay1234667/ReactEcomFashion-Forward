const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_API_DATA":
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === "true";
            });

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,
            };
            
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };


        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };


        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            };

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            };

        case "SET_ADD_TO_CART_PRODUCT":
            const { product, quantity, totalPrice } = action.payload;
            return {
                ...state,
                isSingleLoading: false,
                carts: [...state.carts, product],
                quantity: quantity,
                totalPrice: totalPrice,
            };


        case "FILTER_BY_CATEGORY":
            const filteredProducts = state.products.filter(
                (product) => product.category === action.payload
              );

            return {
                ...state,
                isLoading: false,
                allproduct:filteredProducts
            };


        default:
            return state;
    }
};

export default ProductReducer;