import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Payment from "./Components/payment/payment";
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MainCategory from './Pages/MainCategory/MainCategory';
import NotFound from './Pages/NotFound/NotFound';
import Offers from "./Pages/Offers/Offers";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Profile from "./Pages/Profile/Profile";
import Register from './Pages/Register/Register';
import SubCategory from './Pages/SubCategory/SubCategory';
import WishList from './Pages/WishList/WishList';
import store from "./Store/store";


import { Provider } from 'react-redux';
import ChatGPTComponent from './Components/ChatGPTComponent/ChatGPTComponent';
import { LogoutPage } from './Pages/LogoutPage/logoutPage';
import appContext from './Context/appContext';
import { useState } from "react";
import WishlistAlert from "./components/WishListAlert/WishListAlert";






function App() {



    const [activeWishlistAlert, setActiveWishlistAlert] = useState(false)
    const [msgWishListAlert, setMsgWishListAlert] = useState('')










    return (


        <appContext.Provider
            value={{ activeWishlistAlert, setActiveWishlistAlert, msgWishListAlert, setMsgWishListAlert }}>
            
            <Provider store={store}>
                <BrowserRouter>

                    <Header />
                    <WishlistAlert />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/offers" element={<Offers />} />
                        <Route path="/Cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/:catName" element={<MainCategory />} />
                        <Route path="/Offers" element={<Offers />} />
                        <Route path="/details/:id/:sim?" element={<ProductDetails />} />
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="srch/:catName/:sub" element={<SubCategory />} />
                        <Route path="/WishList" element={<WishList />} />
                        <Route path="/logout" element={<LogoutPage />} />
                        <Route path="/gpt" element={<ChatGPTComponent />} />
                        <Route path="*" element={<NotFound />} />




                    </Routes>

                    <Footer />
                </BrowserRouter>

            </Provider>
        </appContext.Provider>
    )
}

export default App
