import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Page/Home.jsx'
import AddCourse from './Page/AddCourse.jsx'
import Courses from './Page/Courses.jsx'
import AuthContext from './Context/AuthContex/AuthContext.jsx'
import LoginPage from './Page/LoginPage/LoginPage';
import RegistrationPage from './Page/RegistrationPage/RegistrationPage';
import AllCourses from './Page/AllCourses/AllCourses.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/add-course',
        element: <AddCourse />
      },
      {
        path: '/login',
        element: <LoginPage/>
      },
      {
        path: '/registration',
        element: <RegistrationPage/>
      },
      {
        path: '/all-courses',
        element: <AllCourses/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <AuthContext>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </AuthContext>
)
