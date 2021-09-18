import * as types from '../Action/Actiontypes'

const reducer=(state,action)=>
{
    console.log(state.users)
    switch(action.type)
    {   case types.LOGGED_USER:
        return{
            ...state,
            loggedInuser:action.payload
        }
        case types.ADD_USER:
        return{
            ...state,
            users:[...state.users, action.payload],
        }
        case types.DELETE_USER:
            return{
               ...state,
               users:state.users.filter((item,index)=>index!==action.payload)
            }
            case types.EDIT_USER:
                console.log(action.payload1)
                return{
                    ...state,
                    users:state.users.map((item,index)=>
                    {
                        if(index===action.payload1)
                    {
                        return action.payload
                    }
                    return item
                    })
                }
                case types.LOGOUT:
                    return{
                        ...state,
                        users:action.payload,
                        loggedInuser:action.payload1
                    }
            default:
            return state;
               
            
    }
    
}
export default reducer