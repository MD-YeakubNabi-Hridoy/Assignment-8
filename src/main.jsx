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
import Readbook from './Components/Readbook.jsx'
import Wishlist from './Components/Wishlist.jsx'
import { Toaster } from 'react-hot-toast';
import { Root } from 'postcss'
import Error from './Pages/Error.jsx'
import React from 'react'


const router = createBrowserRouter([
  {
    // path: '/',
    element: <Root />,
    errorElement: <Error/>,
  },
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('../Book.json')
      },
      {
        path:'/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../Book.json')
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            index: true,
            element: <Readbook></Readbook>
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>
          }
        ]
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
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>
)
