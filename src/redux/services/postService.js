//MASIH ERROR JANGAN DIPAKE DULU
import {API} from '../../config';
import axios from 'axios';
import {postConstant} from '../types';
import {authHeader} from '../helpers/auth-header';

export const postService = {    
    getAllPost
};

async function getAllPost(){
    const data = await axios.get('http://localhost:3001/api/post/getcard')
    // const data = await axios.get(`${API}/${postConstant.GET_ALL_POST}`)
    console.log(data.data);
    localStorage.setItem('posts', JSON.stringify(data.data.posts));
    return data.data.posts;
}

