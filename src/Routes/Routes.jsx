
import { createBrowserRouter } from 'react-router-dom';

import PostUser from '../component/PostUser';
import DisplayUser from '../component/DisplayUser';
import UpdateData from '../component/UpdateData';
import MainLayOut from '../component/LayOut/MainLayout/MainLayOut';
import AdminLayOut from '../page/AdminLayOut/AdminLayOut';
import AdminContact from '../page/AdminLayOut/AdminContact';
import AdminProduct from '../page/AdminLayOut/AdminProduct';
import AdminHome from '../page/AdminLayOut/AdminHome';
import Home from '../page/Home';
import Register from '../page/Register';
import Login from '../page/Login';

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/post",
            element: <PostUser></PostUser>,
          },
           {
            path: "/users",
            element: <DisplayUser />,
            loader: () => fetch(`http://localhost:5000/users`),
          }, 
          {
            path: "/users/:id",
            element: <UpdateData />,
            loader: ({ params }) => {
              console.log(params);
              return fetch(`http://localhost:5000/users/${params.id}`);
            },
          },
          {
            path:'/reg',
            element:<Register></Register>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/admin',
            element:<AdminLayOut></AdminLayOut>,
            children:[
                
                {
                    path:'/admin', // or index: true
                    element:<AdminHome></AdminHome>
                },
                {
                    path:'/admin/post',
                    element:<PostUser></PostUser>
                },
                {
                    path:'/admin/users',
                    element:<DisplayUser></DisplayUser>,
                    loader: () => fetch(`http://localhost:5000/users`),
                },
                {
                    path:'/admin/adminContact',
                    element:<AdminContact></AdminContact>
                },
                {
                    path:'/admin/adminProduct',
                    element:<AdminProduct></AdminProduct>
                }
            ]
          }
        ]
      },
      
]);


export default Routes;