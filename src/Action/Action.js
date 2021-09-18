import * as types from '../Action/Actiontypes';
// //import axios from 'axios';
// export const getList=()=>
// // {
// //     return function (dispatch)
// //     {//https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099
// //         axios.get("https://api.github.com/users")
// //     .then((res)=>
// //     {
// //         console.log(res)
// //        dispatch({
// //            type:types.GET_LIST,
// //            payload:res.data
// //        })
// //     })
// //     }
// }
export const login=(data)=>
{
   
    return function (dispatch)
    {
        dispatch({
            type:types.LOGIN,
            payload:data
        })
    }
}
export const loggedinuser=(data)=>
{
    console.log(data);
    return function(dispatch)
    {
        dispatch({
            type:types.LOGGED_USER,
            payload:data
        })
    }
}
export const logout=(data,loggedinuser)=>
{
   
    return function (dispatch)
    {
        dispatch({
            type:types.LOGOUT,
            payload:data,
            payload1:loggedinuser
        })
    }
}

export const addUser=(AddData)=>
{
   console.log(AddData);
    return function (dispatch)
    {
        dispatch({
            type:types.ADD_USER,
            payload:AddData
        })
    }
}
export const deleteUsr=(index)=>
{
   console.log(index+" index");
    return function (dispatch)
    {
        dispatch({
            type:types.DELETE_USER,
            payload:index
        })
    }
}
export const updateUsr=(data,index)=>
{
   console.log(index);
    return function (dispatch)
    {
        dispatch({
            type:types.EDIT_USER,
            payload:data,
            payload1:index
        })
    }
}