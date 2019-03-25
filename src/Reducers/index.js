import { combineReducers } from "redux";

const taskReducer = (state=[], action) => {
        switch(action.type){
            case'ADD_TASK':
            state = state.concat(action.payload);
            break;

            default:
            break;
        }

            return state;


},

reducers = combineReducers({
    tasks:taskReducer
});

export default reducers;