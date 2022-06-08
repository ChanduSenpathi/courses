import React, { useEffect, useState } from 'react'
import { getUserdetails } from '../config/services'

export default function Userdetails() {
    const[users,getUsers]=useState([])
    const[istrue,setTrue]=useState(true)
    useEffect(()=>{
        getUserdetails().then(res=>{
            if(res){
                getUsers(res.data)
            }
        })
        if(users.length>0){
            setTrue(false)
        }else{
            setTrue(true)
        }
    },[])
  return (
    <div>
        <h2>User details</h2>
        <div className='container'>
            {istrue?<h3 className='text-center'>There is no Users</h3>:(
                <div className='row justify-content-center'>
                    {users.map(user=>
                    <div key={user.id} className="col-md-3 m-1 card">
                        <h5 className='card-title'>Username: {user.name}</h5>
                        <div className='card-body'>
                            <p>E-mail: {user.email}</p>
                            <p>Contact: {user.contact}</p>
                            <p>You are selected for {user.course} Course</p>
                        </div>
                    </div>
                    )}
                </div>
            )}
        </div>
    </div>
  )
}
