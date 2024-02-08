
const initialState={
    todos:[],
    inputValue:''
}

function TodoReducer(state=initialState,action){
    if(action.type==='NEWTODO'){
        return{...state,inputValue:action.payload}
    }
    if(action.type==='ADDTODO'){
        return{...state,todos:[...state.todos,state.inputValue]}
    }
    if(action.type==='DEL'){
        let temp=[...state.todos];
        temp.splice(action.ind,1);
        return{...state,todos:[...temp]};
    }
    return state;
}
export default TodoReducer