import { UNLIKE_SCREAM, LIKE_SCREAM, SET_SCREAMS, LOADING_DATA, DELETE_SCREAM, ADD_POST, SET_SCREAM, SUBMIT_COMMENT } from "../types";

const initialState= {
    screams: [],
    scream: {},
    loading: false
};

function dataReducer(state = initialState, action){
    switch(action.type){
        case LOADING_DATA:{
            return {
                ...state,
                loading: true
            }
        }
        default :
            return state;
    }
};
export default dataReducer;