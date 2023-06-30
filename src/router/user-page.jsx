import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import location from './img/location.png';
import company from './img/company.png';

export default function UserPage() {
    const  { username }  = useParams();
    const [user, setUser] = useState(null);

        useEffect(() => {
            const fetchUser = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
            };
        
            
            fetchUser();
            

        }, [username]);

        if (!user) {
            return <div>Loading...</div>;
        }

        return (
            <div className='userPage-container'>
                <div className='userPage'>
                    <div className='userPage-colum_1'>

                        <div className='userPage-avatar-container'>
                            <img src= {user.avatar_url} className="userPage-avatar" alt={user.login}></img>
                        </div>
                        
                        <div className='userPage-avatar-info'>
                            {(user.location) && <div><img src={location} alt="Loc" width={12} height={16}/> <i>{user.location}</i></div>}
                            {(user.company) && <div><img src={company} alt="Com" width={17} height={17}/> <i>{user.company}</i></div>}
                        </div>
                    </div>

                    <div className='userPage-colum_2'>

                        <h2 className='userPage-name'>{user.name} </h2>
                        <h4 className='userPage-login'><a href={user.html_url}>@{user.login}</a> </h4>
                        <div className='userPage-info'>
                            <div className='userPage-followers'>Followers: <b>{user.followers}</b></div>
                            <div className='userPage-followers'>Following: <b>{user.following}</b></div>
                            <div className='userPage-followers'>Repositories: <b>{user.public_repos}</b></div>
                        </div>
                        <div className='userPage-bio-block'>
                            
                            <div className='userPage-bio'>
                                {(user.bio)? <i>{user.bio} </i> : 
                                <i>And we will never be alone again
                                'Cause it doesn't happen every day
                                Kinda counted on you being a friend
                                Can I give it up or give it away?
                                Now I thought about what I wanna say
                                But I never really know where to go</i>}
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        )
}