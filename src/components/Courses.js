import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCourse } from '../config/services'

export default function Courses() {
    const [course,setCourse]=useState([])
    useEffect(()=>{
        getCourse().then(res=>setCourse(res.data))
    },[])
  return (
    <div>
        <h1>Courses</h1>
        <div className='row justify-content-center align-items-center'>
            {course.map(items=>
                <div key={items.id} className="col-md-3 p-2 m-4 card">
                    <img src={items.imgUrl} className="w-100 course-image"/>
                    <h2 className='text-center'>{items.title}</h2>
                    <Link to="/form" className='btn bg-success text-white'>Enquire Now</Link>
                </div>
                )}
        </div>
    </div>
  )
}
