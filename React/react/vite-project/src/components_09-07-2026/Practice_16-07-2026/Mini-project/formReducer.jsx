export const initialState = {
    title:"",
    author:""

};
export function formReducer(state, action) {
    switch(action.type){
        case "TITLE":
            return{
                ...state,
                title:action.payload
            }

        case "AUTHOR":
            return{
                ...state,
                author:action.payload
            }

        case "RESET":
            return initialState;
        default:
            return state;
    }
}