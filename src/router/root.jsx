import '../App.css';
import React from 'react';
import UserSearch from '../components/UserSearch';
import UserDetails from '../components/UserDetails';


export default function Root( {handleSearch, userList, onDelete} ) {
  
  

  return (
    <div className='search__panel'>
      <h1 className='search__header'>GitHub User Search</h1>
      <UserSearch onSearch={handleSearch} />
      <UserDetails onDelete = {onDelete} userList={userList} />
    </div>
  );
};
