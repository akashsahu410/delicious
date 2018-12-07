import {createStore} from 'redux'
export let initialState={
    edit:""
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "Print":{
            return state;
        }
        default:{
            return state;
        }
    }
}
const store=createStore(reducer)
export default store;