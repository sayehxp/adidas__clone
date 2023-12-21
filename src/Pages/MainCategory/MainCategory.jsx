import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import ProductCard from "../../components/ProductCard/ProductCard";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import { db } from "../../assets/Firebase/Firebase";
import {
  handleSwiperNav,
  icons,
  mainCategoryImages,
  pagination,
  swiperBreakPoints1,
} from "../../config/config";
import "./MainCategory.css";
import "./MainCategoryRWD.css";
import { useState } from "react";
export default function MainCategory() {
  const { catName } = useParams();
  const cover = useSelector((state) => state.setting.cover);
  let allProducts = useSelector((state) => state.allProducts.allProducts);

  const navigate = useNavigate();
  const menSubNames = ["هودي", "شورت", "تيشيرت", "أحذية"];
  const womenSubNames = ["تيشيرت", "جاكيت", "بنطال", "أحذية"];
  const kidsSubName = ["ملابس", "أحذية"];
  const [swiperData, setSwiperData] = useState([]);
  async function fetchData(gender, category) {
    try {
      const productDB = await getDocs(
        query(
          collection(db, "products"),
          where("gender", "==", gender),
          where("category", "==", category),
          limit(10)
        )
      );

      const arr = [];
      productDB.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });

      setSwiperData(arr);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  }

  useEffect(() => {
    const category = catName != "kids" ? "تي شيرت" : "ملابس";
    fetchData(gender(), category);
    window.scrollTo({top: 0});
  }, [catName]);
  const gender = () =>
    catName == "men" ? "الرجال" : catName == "women" ? "النساء" : "الأطفال";

  return (
    <div className="Home" role="main">
      <div className="homepage-cover">
        <img
          className="w-100"
          src={
            catName === "men"
              ? cover.men || mainCategoryImages.menCover
              : catName === "women"
              ? cover.women || mainCategoryImages.womenCover
              : cover.kids || mainCategoryImages.kidsCover
          }
          alt="Homepage Cover"
        />
      </div>

      <div className="cat-container row justify-content-center m-0 p-0">
        <h3 className="header-box text-end m-4">{gender()}</h3>

        {catName == "men" &&
          menSubNames.map((subName) => (
            <div
              key={subName}
              className="main-cat-men col-12 col-md-3 position-relative"
              onClick={() => navigate(`/srch/${catName}/${subName}`)}
            >
              <a className="position-absolute main-cat-btn d-flex">
                <img
                  src={icons.arrowRightBlack}
                  width={20}
                  height={20}
                  className="my-auto"
                />
                <span>{subName}</span>
              </a>
            </div>
          ))}

        {catName == "women" &&
          womenSubNames.map((subName) => (
            <div
              key={subName}
              className="main-cat-women col-12 col-md-4 position-relative"
              onClick={() => navigate(`/srch/${catName}/${subName}`)}
            >
              <a className="position-absolute main-cat-btn d-flex">
                <span className="me-1">نسائي</span>
                <span>{subName}</span>
                <span className="ms-1"> تسوقى </span>
              </a>
            </div>
          ))}

        {catName == "kids" &&
          kidsSubName.map((subName) => (
            <div
              key={subName}
              className="main-cat-kids col-12 col-md-4 my-2  position-relative"
              onClick={() => navigate(`/srch/${catName}/${subName}`)}
            >
              <a className="position-absolute main-cat-btn d-flex">
                <img
                  src={icons.arrowRightBlack}
                  width={20}
                  height={20}
                  className="my-auto"
                />
                <span className="me-1"> للاطفال </span>
                <span>{subName}</span>
              </a>
            </div>
          ))}
      </div>

      {allProducts?.length > 0 && (
        <div className="experience-component product-list my-5">
          <button className="swiper1-btn-next swiper-btn-next" />
          <button className="swiper1-btn-prev swiper-btn-prev" />

          <h3 className="text-end pe-2 mt-5 mb-4">وصل حديثاً</h3>

          <Swiper
            className="swiper swiper1"
            spaceBetween={10}
            navigation={handleSwiperNav(1)}
            pagination={pagination}
            breakpoints={swiperBreakPoints1}
          >
            {swiperData.map((prd) => (
              <SwiperSlide key={uuidv4()}>
                <ProductCard
                  prd={prd}
                  defaultHover={false}
                  defaultXimg={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* {allProducts.length > 0 && (
        <div className="experience-component product-list my-5">
          <button className="swiper2-btn-next swiper-btn-next" />
          <button className="swiper2-btn-prev swiper-btn-prev" />

          <h3 className="text-end pe-2 mt-5 mb-4">الأفضل مبيعاً</h3>

          <Swiper
            className="swiper swiper2"
            spaceBetween={10}
            navigation={handleSwiperNav(2)}
            pagination={pagination}
            breakpoints={swiperBreakPoints2}
          ></Swiper>
        </div>
      )} */}
    </div>
  );
}
