
import './App.css'
// malumotlar /////////
import { cards } from './Malumotlar'


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
import Shoping from './Pages/Shoping'
import Informations from './Pages/informations'
import Faq from './Pages/Faq'
import Navbar from './layout/Navbar'
import About from './Pages/About'
import CantactUs from './Pages/CantactUs'
import Shop1 from './Pages/Shop1'

import RootLayout from './layout/RootLayout'
import { useState } from 'react'

function App() {

  const [shop, setShop] = useState([]);

  const headleAdd = (item) => {
    setShop((prevShop) => {
      const existingItem = prevShop.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevShop.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevShop, { ...item, quantity: 1 }];
      }
    });
  };
  let totalCost = shop.reduce((item, index) => item + parseInt(index.cost), 0)
  let totalCost1 = shop.reduce((item, index) => item + parseInt(index.cost1), 0)


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='pages' element={<Pages />} />
        <Route path='products' element={<Products />} />
        <Route path='blog' element={<Blog  />} />
        <Route path='shop' element={<Shop cards={cards} headleAdd={headleAdd}/>} />
        <Route path='contact' element={<Contact />} />
        <Route path='shoping' element={<Shoping shop={shop} totalCost={totalCost} totalCost1={totalCost1}/>} />
        <Route path='informations' element={<Informations />} />
        <Route path='faq' element={<Faq/>} />
        <Route path='about' element={<About/>} />
        <Route path='cantactus' element={<CantactUs/>}/>
        <Route path='shop1' element={<Shop1/>}/>
      </Route>
    )
  )

  return (
    <div className='App'>
      <Navbar />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
