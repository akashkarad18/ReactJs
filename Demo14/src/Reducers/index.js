import ins_des from "./inc_des";
import {combinerReducers} from 'redux'


const rootReducer=combinerReducers(
    {
        ins_des
    }
);
export default rootReducer;