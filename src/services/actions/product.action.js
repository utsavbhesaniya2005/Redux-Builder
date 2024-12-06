export const addProduct = (data) => {
    return{
        type : "ADD_PRODUCT",
        payload : data
    }
}

export const findSingleProduct = (id) => {
    return{
        type : "FIND_PRODUCT",
        payload : id
    }
}

export const getProduct = () => {
    return{
        type : "GET_PRODUCT"
    }
}

export const updateProduct = (updateRecs) => {
    return{
        type : "UPDATE_PRODUCT",
        payload : updateRecs
    }
}

export const deleteProduct = (id) => {
    return{
        type : "DELETE_PRODUCT",
        payload : id
    }
}

export const loading = () => {
    return{
        type : "LOADING"
    }
}

// thunk is used to give logics in action and thunk always return a function and action always return a logics and also it dispatch method which used to pass data from actions to reducer and it is provided by think.

export const getAsyncAdd = (data) => {
    return (dispatch) => {

        dispatch(loading())

        setTimeout(() => {
            dispatch(addProduct(data))
        }, 2000)
    }
}

export const getAsyncDelete = (id) => {
    return (dispatch) => {

        dispatch(loading())
        
        setTimeout(() => {
            dispatch(deleteProduct(id))
        }, 2000)
    }
}

export const getAsyncUpdate = (data) => {
    return (dispatch) => {

        dispatch(loading())
        
        setTimeout(() => {
            dispatch(updateProduct(data))
        }, 2000)
    }
}

export const getAllData = () => {
    return (dispatch) => {

        dispatch(loading())
        
        setTimeout(() => {
            dispatch(getProduct())
        }, 2000)
    }
}