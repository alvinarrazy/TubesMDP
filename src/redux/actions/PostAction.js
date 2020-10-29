import {postConstant} from '../types';
import {postService} from '../services/postService';
import {history} from '../helpers/history';

export const getAllPost = () => {
    return dispatch => {
        dispatch({
            type: postConstant.GET_ALL_POST
        })
        postService.getAllPost()
        .then(result => {
            console.log(result)
        })
    }
}