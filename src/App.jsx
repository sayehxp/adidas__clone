import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import MainCategory from './Pages/MainCategory/MainCategory'
import NotFound from './Pages/NotFound/NotFound'
import Offers from "./Pages/Offers/Offers"
import ProductDetails from "./Pages/ProductDetails/ProductDetails"
import Profile from "./Pages/Profile/Profile"
import Register from './Pages/Register/Register'
import SubCategory from './Pages/SubCategory/SubCategory'
import WishList from './Pages/WishList/WishList'
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import HeaderPromotion from "./Components/HeaderPromotion/HeaderPromotion"
import store from "./Store/store"
import { Provider } from 'react-redux';
function App() {















  return (
    <Provider store={store}>

    
<BrowserRouter>

<Header/>

<Routes>
  {/* <Route path="/" element= {<Offers/>}/> */}
  <Route path="/" element= {<Home/>}/>
  <Route path="/Cart" element= {<Cart/>}/>
  <Route path="/login" element= {<Login/>}/>
  <Route path="/:catName" element= {<MainCategory/>}/>
  <Route path="/NotFound" element= {<NotFound/>}/>
  <Route path="/Offers" element= {<Offers/>}/>
  <Route path="/details/:id" element= {<ProductDetails/>}/>
  <Route path="/Profile" element= {<Profile/>}/>
  <Route path="/Register" element= {<Register/>}/>
  <Route path="/:catName/:sub" element= {<SubCategory/>}/>
  <Route path="/WishList" element= {<WishList/>}/>
</Routes>

<Footer/>
</BrowserRouter>
</Provider>
  )
}

export default App
