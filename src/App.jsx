
import './App.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,

} from 'react-router-dom'

import Home from './Pages/Home'
import Pages from './Pages/Pages'
import Products from './Pages/Products'
import Blog from './Pages/Blog'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'

import Navbar from './layout/Navbar'

import RootLayout from './layout/RootLayout'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'  element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='pages' element={<Pages />} />
        <Route path='products' element={<Products />} />
        <Route path='blog' element={<Blog />} />
        <Route path='shop' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <div className='App'>
      <Navbar/>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
