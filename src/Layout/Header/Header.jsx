import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header id='header'>
            <div className="container flex items-center justify-between">
                <div className="logo_and_serach flex items-center gap-5">
                    <h1 className='font-bold text-3xl'>iSchool</h1>
                </div>

                <nav className="menu">
                    <ul className='flex items-center gap-5 text-lg'>
                        <Link to='/'>Home</Link>
                        <Link to='/courses'>Courses</Link>
                        <Link to='/add-course'>Add Course</Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
