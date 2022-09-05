const reducer = (state, action)=>{
    
    switch( action.type){
        case "LOADING_STATE" : 
            return {
                ...state,
                isLoading: true
            }
        case "GET_PREV" :
            let updatedPage = state.page - 1 < 1 ? 1 : state.page - 1;  
            return {
                ...state,
                page: updatedPage
            }
        case "GET_NEXT" : 
            let updatedNext = state.page + 1 > state.nbPages ? 1 : state.page + 1; 
            return {
                ...state,
                page: updatedNext
            }
        case "SEARCH" : 
            return {
                ...state,
                query: action.payload
            }
        case "GET_STRIES" : 
            return {
                ...state,
                nbPages: action.payload.nbPages,
                hits: action.payload.hits,
                isLoading: false
            }
        default: 
            return {
                ...state
            }
    }

}

export default reducer;