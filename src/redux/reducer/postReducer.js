export const postReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload 
        case 'ADD_POST':
            return [...state, action.payload]
        default:
            return state

    }

}

//i need to call posts somewhere to see this work, but I need to be able to access the specific stat ebefore i can make this happen. I need to make th elinks work 

