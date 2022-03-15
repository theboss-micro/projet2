import { GET_VET, VET_REGISTER, VET_REGISTER_FAILED, VET_REGISTER_SUCCESS } from "../Constants/ActionType"


const initialState ={
   loading :false, 
   listVeto:[]
}

const ReducerRegister = (state=initialState, action ) =>{
    switch (action.type){
        case VET_REGISTER:
            return {...state, loading:true}
        case VET_REGISTER_SUCCESS:
            return{...state, loading:false, msg:action.payload}    
        case VET_REGISTER_FAILED:
            return{...state, loading:false, Error:action.payload} 
        
        case GET_VET:
            return {...state, listVeto:action.payload}

        default:
            return state
    }
}
export default ReducerRegister