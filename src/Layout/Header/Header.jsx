import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from './../../Context/AuthContex/AuthContext';
import Swal from 'sweetalert2';


const Header = () => {

    const { user, userSignOut } = useContext(authContext)

    console.log(user)

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                Swal.fire({
                    position: "center center",
                    icon: "success",
                    title: "You are loged Out",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Error While sign out!",
                    footer: `${error.code}. ${error.message}`
                })
            })
    }

    return (
        <header id='header' className='border-b pb-3'>
            <div className="container flex items-center justify-between">
                <div className="logo_and_serach flex items-center gap-5">
                    <h1 className='font-bold text-3xl'>iSchool</h1>
                </div>

                <nav className="menu">
                    <ul className='flex items-center gap-5 text-lg'>
                        <Link to='/'>Home</Link>
                        <Link to='/all-courses'>All Courses</Link>
                        <Link to='/add-course'>Add Course</Link>


                        <div className="icons flex items-center gap-3">
                            {user?.email && <button onClick={handleSignOut} className='btn bg-yellow-500 font-bold text-lg'>Log Out</button>}
                            {!user?.email && <NavLink className='btn bg-yellow-500 font-bold text-lg' to={'/login'}>Login</NavLink>}

                            {user?.email &&
                                <div className="tooltip tooltip-bottom" data-tip={user?.email && user.displayName}>
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                            <img src={user?.photoURL} alt="profile" />
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
