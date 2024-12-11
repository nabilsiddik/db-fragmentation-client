import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({ course }) => {
    return (
        <div id='Course'>
            <div className="card bg-base-100 w-full shadow-xl p-0">
                <figure className='w-full'>
                    <img className='w-full'
                        src={course.thumbnailUrl}
                        alt="Shoes" />
                </figure>
                <div className="card-body px-0 min-h-[230px]">
                    <h2 className="card-title text-xl">{course.title}</h2>
                    <p className='text-left'>{course.description}</p>

                    <div className="regular_price font-bold text-xl flex items-center justify-between">
                        <p className='btn bg-yellow-500 font-bold text-xl'>Price: {course.price === 0 ? 'Free' : course.price}</p>
                        <p className='text-left font-bold text-xl btn bg-yellow-500'>{course.category}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Course
