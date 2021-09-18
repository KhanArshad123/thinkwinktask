import {createStore,applyMiddleware} from 'redux';
import reducer from '../Reducer/Reducer';
import reduxThunk from "redux-thunk";
const middleware=[reduxThunk];
const initial_State={
    users:[],auth:'false',loggedInuser:""
}
const store =createStore(reducer,initial_State,applyMiddleware(...middleware));

export default store;