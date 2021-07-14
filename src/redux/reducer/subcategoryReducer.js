export const subcategoryReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SUBCATEGORIES':
            return action.payload 
        default:
            return state

    }

}