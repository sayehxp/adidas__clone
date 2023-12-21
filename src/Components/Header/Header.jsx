import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { getWishlistByEmail } from "../../Pages/WishList/firebasewishList";
import { GETallProducts } from "../../Store/Slices/allProducts";
import { getSetting } from "../../Store/Slices/settingSlice";
import { getWishListFirestore } from "../../Store/Slices/wishlistSlice";
import EgFlag from "../../assets/icons/EgFlag.png";
import HeaderPromotion from "../HeaderPromotion/HeaderPromotion";
import { getFromCart } from "./../../Store/Slices/cartSlice";
import Autocomplete from "./../Autocomplete/Autocomplete";
import "./Header.css";

import HeaderMenuToggle from "../HeaderMenuToggle/HeaderMenuToggle";

function Header() {
  const favorites = useSelector((state) => state.favorites.favorites);
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const cart = useSelector((state) => state.cart.cart) || [];
  const navcolor = useSelector((state) => state.setting.navcolor);

  const [menuToggleVisible, setMenuToggleVisible] = useState(false);
  const [email, setEmail] = useState(null);
  const [srchActive, setSrchActive] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const effRan = useRef(null);

  useEffect(() => {
    if (effRan.current) return;
    setEmail(localStorage.getItem("name")); //email
    dispatch(getSetting());
    dispatch(getFromCart());
    getWishlistByEmail()
      .then((data) => dispatch(getWishListFirestore(data)))
      .catch((err) => console.log(err));
    dispatch(GETallProducts({ gender: "الأطفال", category: "أحذية" }));
    setTimeout(() => {
      dispatch(GETallProducts({ gender: "الرجال", category: "هودي" }));
    }, 500);
    return () => (effRan.current = true);
  }, []);

  return (
    <header>
      <HeaderPromotion />
      <HeaderMenuToggle
        menuToggleVisible={menuToggleVisible}
        setMenuToggleVisible={setMenuToggleVisible}
      />
      <Navbar
        data-bs-theme="light"
        className="d-flex flex-column"
        id="nav"
        style={{ backgroundColor: navcolor }}
      >
        {!srchActive ? (
          <>
            {/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ TOP Nav ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬*/}
            <Nav id="navTop" className="w-100 d-none d-lg-flex m-0">
              <img
                src={EgFlag}
                width={20}
                height={15}
                className="my-auto mx-3"
              />
              <Nav.Link onClick={() => Navigate(email ? "/logout" : "/login")}>
                {email?.length ? email : "تسجيل الدخول"}
              </Nav.Link>
              <Nav.Link>المرتجعات</Nav.Link>
              <Nav.Link>adiclub</Nav.Link>
              <Nav.Link>منتبع الطلب</Nav.Link>
              <Nav.Link>مساعدة</Nav.Link>
              <Nav.Link> Egypt موقع اديداس الرسمى</Nav.Link>
            </Nav>
            {/* ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Bottom Nav ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬*/}
            <Nav id="navBottom" className="flex-row-reverse w-100">
              <div
                className="nav-toggle-btn col-1 d-lg-none order-1"
                onClick={() => setMenuToggleVisible(!menuToggleVisible)}
              >
                <i className="fa fa-bars" />
              </div>

              <Navbar.Brand
                className="adidas_logo col-9 me-1 col-lg-2 justify-content-center d-flex order-4 order-lg-1"
                onClick={() => Navigate("/")}
              >
                <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwe85a3da9/images/adidas_logo.svg" />
              </Navbar.Brand>

              <ul
                id="navLinksBottom"
                className="col-lg-5 d-none d-lg-flex flex-row-reverse order-1 m-0"
                role="menu"
              >
                <Nav.Link onClick={() => Navigate("men")}>الرجال</Nav.Link>
                <Nav.Link onClick={() => Navigate("women")}>النساء</Nav.Link>
                <Nav.Link onClick={() => Navigate("kids")}>الاطفال</Nav.Link>
                <Nav.Link>الرياضات</Nav.Link>
                <Nav.Link>اسلوب حياه</Nav.Link>
                {/* <Nav.Link>عروض</Nav.Link> */}
              </ul>

              <div className="col-1 position-relative col-lg-5 d-flex order-4 m-0 me-auto z-1 ">
                <div className="utility_nav">

                  <div className="d-none d-lg-block" id="kkakaka">
                    <Autocomplete setSrchActive={setSrchActive} />
                  </div>

                  <img
                    className="ms-2 d-lg-none"
                    onClick={() => setSrchActive(true)}
                    src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw16c0c20e/images/search.svg"
                    title="srch"
                    width={25}
                    height={25}
                  />

                  <img
                    className="d-none d-md-block"
                    onClick={() => Navigate("/profile")}
                    src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw217f2aa1/images/profile.svg"
                    title="Profile"
                    width={22}
                    height={24}
                  />

                  <div
                    className="notification"
                    onClick={() => Navigate("/WishList")}
                  >
                    <img
                      className="imgnotif"
                      src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/ar_EG/v1697860680345/images/wishlist.svg"
                      title="wishlist"
                    />
                    {favorites?.length > 0 ? (
                      <span className="badge">{favorites.length}</span>
                    ) : null}
                  </div>

                  <div
                    className="notification"
                    onClick={() => Navigate("/cart")}
                  >
                    <img
                      className="imgnotif"
                      src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwa2f65e79/images/bag%20empty.svg"
                      title="cart"
                    />
                    {favorites?.length > 0 ? (
                      <span className="badge">{cart.length}</span>
                    ) : null}
                  </div>
                </div>
              </div>
            </Nav>
          </>
        ) : (
          <>
            <Navbar.Brand
              className="col-12 d-flex justify-content-center"
              onClick={() => Navigate("/")}
            >
              <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwe85a3da9/images/adidas_logo.svg" />
            </Navbar.Brand>

            <div className="w-100 d-flex justify-content-center">
              <Autocomplete setSrchActive={setSrchActive} />
            </div>
          </>
        )}
      </Navbar>
    </header>
  );
}

export default Header;
