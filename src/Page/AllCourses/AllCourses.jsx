import React, { useContext } from 'react'
import { authContext } from '../../Context/AuthContex/AuthContext'
import Course from '../../components/Course/Course'

const AllCourses = () => {

    const { allCourses } = useContext(authContext)


  return (
    <div className='py-20'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {allCourses.map((item, index) => {
        return <Course key={index} course={item} />
      })}
    </div>
  </div>
  )
}

export default AllCourses
