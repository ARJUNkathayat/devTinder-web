import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from './utils/constant'
import { addFeed } from './utils/feedSlice'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'

const Feed = () => {
  const feedStore = useSelector((store)=>store.feed);
  const dispatch = useDispatch();

  const getFeed = async()=>{
    const users = await axios.get("http://localhost:7000/feed", { withCredentials: true });
    console.log("Pikacu",users)
    dispatch(addFeed(users?.data?.data))
  }

  useEffect(()=>{
    getFeed();
  },[])
  console.log("feedStore data:", feedStore);

  return (

    (feedStore &&
   
    <UserCard user={feedStore[0]}/>
  ))
}

export default Feed