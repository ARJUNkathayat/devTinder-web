import axios from 'axios';
import React from 'react';

const RequestCard = ({ data }) => {
  if (!data) return null;
  console.log("lala",data._id)

  const { firstName, lastName, about, photo} = data.fromUserId;
  console.log("kamina",data.fromUserId._id)
  const reviewRequest = async(status,requestId)=>{

    const res = await axios.post("http://localhost:7000/request/review"+"/"+status+"/"+requestId,{},{withCredentials:true});

  }


  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm mx-auto hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center">
        <img
          src={photo || "https://imgs.search.brave.com/v9-8VpinS8OBSMBpW2RcGZEaefuq8XHj4BbRUiXSDPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQzLzQ5Lzk0/LzM2MF9GXzI0MzQ5/OTQ4OF9pUDRjRHRE/QzJnOFc5WWdhSWho/clZnOGhSQnJ0YkZ0/OS5qcGc"}
          alt={`${firstName} ${lastName}`}
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-500"
        />
        <h2 className="text-xl font-semibold text-gray-800">{firstName} {lastName}</h2>
        <p className="text-gray-600 text-sm mt-2 text-center">
          {about || "No bio available."}
        </p>
        <div className="mt-4 flex gap-4">
          <button onClick={()=>reviewRequest("Accepted",data._id)} className="bg-black text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
            Accept
          </button>
          <button onClick={()=>reviewRequest("Rejected",data._id)}className="bg-black text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
