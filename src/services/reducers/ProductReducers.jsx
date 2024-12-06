/* eslint-disable no-case-declarations */
import generateUniqueId from "generate-unique-id";

const initialState = {
    products : JSON.parse(localStorage.getItem('products')) || [],
    allProducts : [],
    product : null,
    isLoading : false,
}

const ProductReducers = (state = initialState, action) => {

    
    switch(action.type){
        
        case 'ADD_PRODUCT' :

            // eslint-disable-next-line no-case-declarations
            let rec = [...state.products, 
                {
                    ...action.payload, 
                    id : generateUniqueId({ length : 4, useLetters: false})
                }
            ];

            localStorage.setItem('products', JSON.stringify(rec));

            return { ...state, products : rec, isLoading : false} 

        case 'FIND_PRODUCT' : 
            
            let recs = JSON.parse(localStorage.getItem('products'));

            let findProduct = recs.find((rec) => rec.id == action.payload )

            return {
                ...state,
                product : findProduct,
            }

        case 'UPDATE_PRODUCT' :

            let recs1 = JSON.parse(localStorage.getItem('products'));

            let updateProduct = recs1.map((rec) => {
                if(rec.id == action.payload.id){
                    return action.payload
                }else{
                    return rec
                }
            })

            localStorage.setItem('products', JSON.stringify(updateProduct))

            return{
                ...state,
                products : updateProduct,
                product : null,
                isLoading : false
            }
            
        case 'DELETE_PRODUCT' :

            let rec3 = JSON.parse(localStorage.getItem('products'));

            let deletedProduct = rec3.filter(rec => rec.id !== action.payload )

            localStorage.setItem('products', JSON.stringify(deletedProduct))

            return{
                ...state,
                products : deletedProduct,
                isLoading : false
            }

        case 'GET_PRODUCT' :

            let getData = JSON.parse(localStorage.getItem('products'));;

            return{
                ...state,
                allProducts : getData,
                isLoading : false
            }

        case 'LOADING' : 
            return{
                ...state,
                isLoading : true
            }

        default : 
            return state;

    }

}

export default ProductReducers;