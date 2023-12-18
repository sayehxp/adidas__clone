//____________PRODUCTDETAILS________________

import React, { useContext, useEffect, useState } from "react";
import ImageZoom from "react-image-zooom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { GETallProducts } from "../../Store/Slices/allProducts";
import { addToWishList } from "../../Store/Slices/wishlistSlice";
import {
  handleSwiperNav,
  heartIconPath,
  icons,
  pagination,
  swiperBreakPoints2,
} from "../../config/config";

import Slickslide from "../../Components/Slickslide/Slickslide";
import appContext from "../../Context/appContext";
import CartMenu from "./../../Components/CartMenu/CartMenu";
import { addToCart } from "./../../Store/Slices/cartSlice";
import "./ProductDetails.css";

//__________________________
const ProductDetails = () => {
  const { setActiveWishlistAlert, setMsgWishListAlert } =
    useContext(appContext);
  const { id } = useParams();

  const [prd, setPrd] = useState("");
  const [showMore, setShowMore] = useState(false);
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  });
  const [activeSize, setActiveSize] = useState("");
  const [bounceAnime, setBounceAnime] = useState(false);
  const [cartMenuActive, setCartMenuActive] = useState(false);

  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const alternative = useSelector((state) => state.allProducts.alternative);
  const favorites = useSelector((state) => state.favorites.favorites);
  const userEmail = localStorage.getItem("email");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const _prd =
      allProducts.find((prd) => prd.id == id) ||
      alternative.find((prd) => prd.id == id);
    setPrd(_prd);
    scrollToTop();
  }, [allProducts, location]);

  useEffect(() => {
    cartMenuActive
      ? navigate("menucart")
      : navigate(location.pathname.replace("menucart", ""));
  }, [cartMenuActive]);

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(GETallProducts());
    }
  }, [location]);

  const showCartMenu = async () => {
    if (!activeSize) return;
    if (!userEmail) {
      localStorage.setItem("email", `${Math.random()}@yahoo.com`);
    }
    dispatch(addToCart({ id: prd.id, size: activeSize }));
    setCartMenuActive(true);
  };

  const handleWishListDetails = () => {
    const isProductInWishlist = favorites.some((item) => item === prd.id);

    if (isProductInWishlist) {
      dispatch(addToWishList(prd.id));
      setMsgWishListAlert("لقد تم حذف المنتج من لائحة المنتجات التي تتمناها");
      setActiveWishlistAlert(true);
    } else {
      dispatch(addToWishList(prd.id));
      setMsgWishListAlert("لقد تم اضافة المنتج فى لائحة المنتجات التي تتمناها");
      setActiveWishlistAlert(true);
    }
  };

  const StopBounceAnim = () => {
    setBounceAnime(!activeSize);
    setTimeout(() => setBounceAnime(false), 1000);
  };

  return (
    <>
      {prd && (
        <div className={cartMenuActive ? "d-flex" : "d-none"}>
          <CartMenu
            setCartMenuActive={setCartMenuActive}
            cartMenuActive={cartMenuActive}
            activeSize={activeSize}
            prd={prd}
          />
        </div>
      )}

      {prd && (
        <div className={`details row mx-0 ${cartMenuActive && "freeze"}`}>
          <aside className="col-12 col-md-4 order-2 order-md-1 pe-4 text-end">
            <p className="prd-name d-none d-md-block">{prd.name}</p>
            <p className="prd-price d-none d-md-block">
              {currency.format(prd.price)}
            </p>

            <div className="sizebox-container mt-4">
              <div className="d-flex justify-content-between ps-5">
                <Link to={""}>جدول المقاسات</Link>
                <strong> اختر مقاس</strong>
              </div>

              <ul className={bounceAnime ? "sizebox bounce-right" : "sizebox"}>
                {prd.size.map((size) => (
                  <li
                    key={uuidv4()}
                    className={
                      !prd.availablesize.includes(size)
                        ? "frozen"
                        : activeSize == size
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      prd.availablesize.includes(size)
                        ? setActiveSize(size)
                        : null
                    }
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>

            <span className="text-warning">
              {bounceAnime ? "يرجى اختيار المقاس" : ""}
            </span>
            <div className="qty" style={{ direction: "rtl" }}>
              <label className="fw-bold"> إمكانية التوفر: </label>
              <span className="px-2 text-muted">
                {activeSize
                  ? `only ${
                      prd.availablestock[prd.availablesize.indexOf(activeSize)]
                    } left`
                  : " اختر الطرازات المتوفرة"}
              </span>
            </div>

            <div className="d-flex flex-row-reverse mt-4">
              <div
                className="btn-add-to-cart col-8"
                onClick={() => {
                  StopBounceAnim();
                  showCartMenu();
                }}
              >
                <button
                  className={`btn-adidas-dark w-100 ${
                    !activeSize ? "bg-secondary" : ""
                  }`}
                >
                  <span>اضف الى عربة التسوف</span>
                  <i className="arrow-front" />
                  <i className="arrow-back" />
                </button>
              </div>

              <button className="wishlist-btn">
                <img
                  src={
                    favorites.some((item) => item === prd.id)
                      ? heartIconPath.filled
                      : heartIconPath.empty
                  }
                  onClick={handleWishListDetails}
                  title="wishlist"
                />
              </button>
            </div>

            <div className="delivery-section">
              <ul className="mt-5 p-0 text-muted list-none">
                <li>
                  <img src={icons.delivery} />
                  <span>شحن مجاني على الطلبات التي تزيد عن 999 جنيه مصري</span>
                </li>

                <li>
                  <img src={icons.deliverySameDay} />
                  <span className="text">
                    التوصيل خلال1-2 يوم عمل للمدن والمناطق الرئيسية
                  </span>
                </li>

                <li>
                  <p>
                    (داخل القاهرة الكبرى والإسكندرية والدلتا والصعيد والبحر
                    الأحمر) المناطق الأبعد من الممكن ان تأخذ وقت اكثر من يومين
                  </p>
                </li>

                <li>
                  <img src={icons.cod} />
                  <span>متاح الدفع عند الاستلام</span>
                </li>

                <li>
                  <img src={icons.lock} />
                  <span>معاملات دفع آمنة </span>
                </li>

                <li>
                  <img src={icons.deliverySameDay} />
                  <span> 30 يوم إرجاع مجاني </span>
                </li>
              </ul>
            </div>
          </aside>

          <main className="col-12 col-md-8 order-md-2 p-0">
            <div className="d-md-none mx-3 my-5 text-end h1 ">
              <span className="mx-2">{prd.name}</span>
              <span>
                {prd.category.replace(" ", "").replace("أحذية", "حذاء")}
              </span>
              <div className="pt-3">
                <del
                  className={`prev-price px-2 fs-5 ${
                    prd.oldprice <= 0 ? "d-none" : ""
                  }`}
                >
                  {currency.format(prd.oldprice)}
                </del>
                <span className="prd-price">{currency.format(prd.price)}</span>
              </div>
            </div>

            {prd.imgurl?.map((value, index) => (
              <div
                className="position-relative d-none d-md-inline-flex"
                style={{
                  width:
                    index == 0 ||
                    (index == prd.imgurl.length - 1 && !(prd.imgurl.length % 2))
                      ? "94%"
                      : "47%",
                  display: !showMore && index >= 5 ? "none" : "inline-flex",
                }}
                key={uuidv4()}
              >
                <ImageZoom
                  className="w-100"
                  key={uuidv4()}
                  src={value}
                  zoom="200"
                />
              </div>
            ))}

            <Swiper
              className="swiper swiper2 d-md-none p-0"
              spaceBetween={10}
              navigation={handleSwiperNav(2)}
              pagination={{ pagination }}
              breakpoints={swiperBreakPoints2}
            >
              {prd.imgurl?.map((value) => (
                <SwiperSlide key={uuidv4()}>
                  <img
                    src={value}
                    alt="product_image"
                    style={{ objectFit: "cover" }}
                    height={400}
                    width={"100%"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="show_more_btn centerme d-none d-md-inline"
              onClick={() => setShowMore(!showMore)}
            >
              <i
                className={`fa-solid fa-chevron-${!showMore ? "down" : "up"}`}
              />
              <span>{!showMore ? "أظهر المزيد" : "أظهر أقل"}</span>
            </button>

            <div className="text-center  pt-5" dir="rtl">
              <span className=" fw-bolder h6">
                {`${prd.alternative.length + 1} ألوان متوفرة - انظر أدناه`}
              </span>
            </div>

            <div className="alternative-container">
              <div className="details-alternative">
                <Slickslide prdId={id} key={uuidv4()} />
                {prd.alternative.map((ip) => (
                  <Slickslide prdId={ip} key={uuidv4()} />
                ))}
              </div>

              <div className="text-end col-12">{prd.color}</div>
            </div>

            <div className="prd-info text-end" dir="rtl">
              <h2 className="py-4">وصف المنتج</h2>
              <p className="prd-name">{prd.name}</p>

              <p className="prd-headline">{prd.headline}</p>
              {prd.description ? (
                <>
                  <p className="prd-description">{prd.description}</p>
                  <h2 className="mt-5">تفاصيل المُنتج</h2>
                  <ul className="prd-detail ">
                    {prd.details.map((detail) => (
                      <li key={uuidv4()}>{detail}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
