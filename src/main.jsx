import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Page/Home.jsx'
import AddCourse from './Page/AddCourse.jsx'
import Courses from './Page/Courses.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/courses',
        element: <Courses/>
      },
      {
        path: '/add-course',
        element: <AddCourse/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}>
    <App/>
  </RouterProvider>
)
