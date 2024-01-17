
import './App.css';
import About from './Component/Pages/About/About'
import ContactUS from './Component/Pages/ContactUS/ContactUS';
import Home from './Component/Pages/Home/Home'
import Products from './Component/Pages/Products/Products'
import RootLayout from './Component/Pages/Root';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Route, createRoutesFromElements } from 'react-router-dom';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />} />
//     <Route path='/home' element={<Home />} />
//     <Route path='/store' element={<Products />} />
//     <Route path='/About' element={<About />} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: '/home', element: <Home /> },
    { path: '/store', element: <Products /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <ContactUS /> },
    ]
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div >
  );
}

export default App;
