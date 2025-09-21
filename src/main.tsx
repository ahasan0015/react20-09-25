import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

// import Demo from './components/demo.tsx'
import AppTest from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Event from './components/event.tsx';
import PropsPage from './components/PropsPage.tsx';

//for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//when add a path this add automatically for extensions
import UseState from './components/UseState.tsx';
import Users from './components/users.tsx';
import Login from './components/Login.tsx';
import Error from './components/Error.tsx';
import UsersProfile from './components/UsersProfile.tsx';

const Approute = createBrowserRouter([
  {
    path: '/', element: <AppTest />,
    children: [
      { path: '/like', element: <UseState /> },
      { path: '/pops', element: <PropsPage /> },
      { path: '/users', element: <Users /> },
      { path: '/user/:id', element: <UsersProfile /> },
    ]
  },
  {path:'/login',element:<Login/>},
  {path:'/*',element:<Error/>}


]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <RouterProvider router={Approute} />

    {/* <AppTest/>
   <Demo></Demo>
   <Event></Event>
   <PropsPage/>
    */}
  </StrictMode>,
)
