const initialState = {
    productsFavourites: [],
    productsLoaded: [],
    productDetail: {}
};

export default (state = initialState, action) => {
    if (action.type === "ADD_PRODUCT_FAVOURITE") {
        return {
            ...state,
            productsFavourites: state.productsFavourites.concat(action.payload)
        }
    }
    if (action.type === "REMOVE_PRODUCT_FAVOURITE") {
        return {
            ...state,
            productsFavourites: state.productsFavourites.filter(item => item.id !== action.payload)
        }
    }
    if (action.type === "GET_PRODUCTS") {
        return {
            ...state,
            productsLoaded: action.payload
        }
    }
    if (action.type === "GET_PRODUCT_DETAIL") {
        return {
            ...state,
            productDetail: action.payload
        }
    }
    return {
        ...state
    }
}