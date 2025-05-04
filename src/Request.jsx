import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addrequest } from './utils/requestSlice';
import RequestCard from '../RequestCard';


const Request = () => {
  const userReq = useSelector((store)=>store.requests);
  const dispatch = useDispatch();
const getRequest = async()=>{
  const userRequest = await axios.get("http://localhost:7000/user/request",{withCredentials:true});

  dispatch(addrequest(userRequest.data.data))

}
useEffect(()=>{
  getRequest();
},[])
  return (
    <div>
      <div className=''>
        <h1 className='px-[30rem] font-serif text-red-600 text-3xl pt-[3rem] font-semibold'>Connection Request Recieved</h1>
      </div>
      <div className='bg-pink-600 h-[30rem]'>
  {
    userReq && userReq.length > 0
      ? userReq.map((req)=>  <RequestCard data={req} />    )
      
      
           : <h1>No users Found</h1>
  }
</div>

   
    
    </div>
  )
}

export default Request