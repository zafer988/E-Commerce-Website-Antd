import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Navbar from './components/Navbar'
import Product from './components/Product';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const routeDefination = createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<LoginPage />} />
      <Route path='product' element={<Product />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  )
  const router = createBrowserRouter(routeDefination)
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App