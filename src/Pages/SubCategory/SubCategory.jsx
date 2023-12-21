import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { GETallProducts } from "../../Store/Slices/allProducts";
import { icons } from "../../config/config";
import { FilterMenu } from "./../../Components/FilterMenu/FilterMenu";
import Loading from "./../../Components/Loading/Loading";
import "./SubCategory.css";

export default function SubCategory() {
  const { catName, sub } = useParams();
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const alternative = useSelector((state) => state.allProducts.alternative);
  const isLoadingPrd = useSelector((state) => state.allProducts.isLoading);
  const [filterMenuActive, setFilterMenuActive] = useState(false);
  const [filterResult, setFilterResult] = useState([]);

  const dispatch = useDispatch();

  const gender = () =>
    catName == "men" ? "الرجال" : catName == "women" ? "النساء" : "الأطفال";

  const isCategoryExist = () => {
    const prd = allProducts.find(
      (prd) =>
        prd.gender == gender() &&
        (prd.category.replace("تي شيرت", "تيشيرت") == sub ||
          prd.arcategory == sub)
    );

    return prd;
  };

  useEffect(() => {
    if (!isCategoryExist()) {
      dispatch(GETallProducts({ gender: gender(), category: sub }));
    }
    window.scrollTo({ top: 0 });
  }, [sub]);

  useEffect(() => {
    if (isCategoryExist()) {
      handleFilter();
    }
  }, [allProducts, sub]);

  const handleFilter = () => {
    let srchResult = [...allProducts];
    srchResult = srchResult.filter(
      (prd) =>
        prd.gender == gender() &&
        (prd.category == sub.replace("تيشيرت", "تي شيرت") ||
          prd.arcategory == sub)
    );

    setFilterResult(srchResult);
  };

  return (
    <>
      {isLoadingPrd ? (
        <Loading />
      ) : (
        <>
          <div className={` ${filterMenuActive ? "d-flex" : "d-none"}`}>
            <FilterMenu
              setFilterResult={setFilterResult}
              filterResult={filterResult}
              allProducts={allProducts}
              alternative={alternative}
              catName={catName}
              sub={sub}
              filterMenuActive={filterMenuActive}
              setFilterMenuActive={setFilterMenuActive}
            />
          </div>

          <div
            className={`main pb-5 ${!filterResult ? "freeze" : ""}`}
            style={{ minHeight: "50vh" }}
          >
            <div className="headline">
              <button
                className="filter-btn"
                onClick={() => setFilterMenuActive(!filterMenuActive)}
              >
                <img src={icons.filter} />
                <span>فلتر</span>
              </button>

              <span className="title fw-normal sub-title">
                {catName == "men" && sub != "all" ? `${sub} للرجال ` : ` `}
                {catName == "woemn" && sub != "all" ? `${sub} للنساء ` : " "}
                {catName == "kids" && sub != "all" ? `${sub} للاطفال ` : "  "}
              </span>
            </div>

            <div className="row prd-row">
              {filterResult &&
                filterResult.map((prd) => (
                  <div
                    className="col-12 col-sm-4 col-md-3 p-0 prd-container"
                    key={prd.id}
                  >
                    <ProductCard prd={prd} />
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
