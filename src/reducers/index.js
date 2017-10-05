import { INC_NUMBER } from '../actions/index'

function performAction(state = { num: 0}, action) {
    switch(action.type){
        case INC_NUMBER:
            console.log('Action performed from the reducer');
            console.log(state, action);
            let num = state.num+1;
            return { num };
        default:
            return state;
    }
}

export default performAction;