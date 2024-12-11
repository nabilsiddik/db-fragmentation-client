import React, { useContext, useState } from 'react'
import { FaGoogle } from "react-icons/fa6"
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { authContext } from '../../Context/AuthContex/AuthContext'

const RegistrationPage = () => {

    const { createUser, signInWithGoogle, profileUpdate, user } = useContext(authContext)

    const [userType, setUserType] = useState('student')

    const handleUserRole = (e) => {
        setUserType(e.target.value)
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const password = form.password.value
        const email = form.email.value
        const userRole = userType

        const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/

        if (name === '' || photoUrl === '' || password === '' || email === '') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill out the required fields!"
            })
        } else if (!passwordRegEx.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a valid password. Password must have At least one uppercase, one lowercase, length minimum 6"
            })
        } else {
            createUser(email, password, name, photoUrl)
                .then((userCredential) => {
                    console.log(userCredential.user)
                    const newUser = { name, photoUrl, email, password, userRole }

                    // Save new user info to the databas
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                console.log('inserted user')
                            } else {
                                console.log('Error while inserting')
                            }
                        })

                    // Show Success Message
                    Swal.fire({
                        position: "center center",
                        icon: "success",
                        title: "Registratin Successful!",
                        showConfirmButton: false,
                        timer: 1500
                    })

                    profileUpdate({ displayName: name, photoURL: photoUrl })
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        footer: `${error.code}. ${error.message}`
                    })
                })
        }

    }

    return (
        <div id='registration_page'>
            <div className="container">
                <div className="hero">
                    <div className="hero-content w-11/12 md:w-10/12 lg:w-6/12 block">

                        <h1 className='text-center mb-8 font-bold text-3xl'>Sign Up</h1>

                        <button onClick={() => signInWithGoogle()} className='btn btn-lg mx-auto w-full bg-yellow-500'><FaGoogle />Signup with Google
                        </button>

                        <p className='text-center my-6 text-lg font-bold'>or</p>

                        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                            <form onSubmit={handleRegistration} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name<span className='text-red-600'> *</span></span>
                                    </label>
                                    <input name='name' type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL <span className='text-red-600'> *</span></span>
                                    </label>
                                    <input name='photoUrl' type="text" placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email <span className='text-red-600'> *</span></span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password <span className='text-red-600'> *</span></span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                </div>

                                <div className="input-group mb-4">
                                    <label className='label font-bold'>Course Type</label>
                                    <select onChange={(e) => handleUserRole(e)} name="select" className='select select-bordered w-full'>
                                        <option value="student">Student</option>
                                        <option value="instructor">Instructor</option>
                                    </select>
                                </div>

                                <label className="label block">
                                    Already have an account? <Link className='underline' to="/login">Login Now</Link>
                                </label>
                                <div className="form-control mt-6">
                                    <button className="btn text-xl bg-yellow-500 ">Registration</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage
