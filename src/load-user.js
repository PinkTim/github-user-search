import axios from 'axios';
import { useParams } from 'react-router-dom';

export default async function FetchUser () {
    const  {userlogin}  = useParams();
    console.log (userlogin);
    const response = await axios.get(`https://api.github.com/users/${userlogin}`);
    let user = response.data;

    return user;
}