import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ListedBooks from './Pages/ListedBooks.jsx'
import ReadChart from './Pages/ReadChart.jsx'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import Blog from './Pages/Blog.jsx'
import BookDetails from './Components/BookDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('/public/Book.json')
      },
      {
        path:'/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/public/Book.json')
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/pageread',
        element: <ReadChart></ReadChart>
      },
      {
        path: '/blogs',
        element: <Blog></Blog>
      },
      {
        path: 'Contact',
        element: <Contact></Contact>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
)
