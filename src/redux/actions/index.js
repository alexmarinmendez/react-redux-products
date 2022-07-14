export function addProductFavourite(payload) {
    return {
        type: "ADD_PRODUCT_FAVOURITE",
        payload
    }
}

export function removeProductFavourite(productId) {
    return {
        type: "REMOVE_PRODUCT_FAVOURITE",
        payload: productId
    }
}

export function getProducts(categoryId) {
    return function(dispatch) {
        return fetch(`https://bodegasdelsur.herokuapp.com/products?categoryId=${categoryId}`)
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: "GET_PRODUCTS",
                    payload: response.products
                })
            })
    }
}

export function getProductDetail(productId) {
    return function(dispatch) {
        return fetch(`https://bodegasdelsur.herokuapp.com/products/${productId}`)
            .then(response => response.json())
            .then(response => {
                dispatch({
                    type: "GET_PRODUCT_DETAIL",
                    payload: response
                })
            })
    }
}

