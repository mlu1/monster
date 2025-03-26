import axios from 'axios';
import {ActionType} from '../action-types';
import {Action} from '../actions';


const searchRepositories =(item:string)=>{
    return async (dispatch:any) => {
        dispatch({
            type:ActionType.SEARCH_REPOSITORIES
        });
    
    try{

    }
    catch (err){
        dispatch({
            type:ActionType.SEARCH_REPOSITORIES
        })
    }
    }
}