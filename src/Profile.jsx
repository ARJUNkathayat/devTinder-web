import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
import UpdatingProfileCard from './UpdatingProfileCard'

const Profile = () => {
   const previousData = useSelector((store)=>store.user)
   
  return (
    (previousData &&
    <div className=''>
      <div className=''><EditProfile  data={previousData}/></div>
   
    </div>
  ))
}

export default Profile