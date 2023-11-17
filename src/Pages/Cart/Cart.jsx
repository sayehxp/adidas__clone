import React from "react";
import { EmptyCart } from "../../components/EmptyCart/EmptyCart";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
export default function Cart() {


//   const Cartp = useSelector((state) => state.Cart.Cartp)
// const dispatch = useDispatch()

// console.log(Cartp);
  
  return (
    <>
      {/* <EmptyCart/> */}
      <div className="padge  row justify-content-end text-end ">
        <h1 className="col-4 m-2 ">
          حقيبتك
          <span className="col-2 prd-unreserve ">(1 منتجات غير محجوزة)</span>
        </h1>
      </div>

      <div className="cartProudact d-flex">
        <div className="orders-summery mt-4 col-4 row justify-content-end">
          <div
            className="ordes-information border boredr-black text-end p-2"
            style={{ width: "90%" }}
          >
            <h4>ملخص الطلب </h4>

            <div className="row ">
              <p className="col-9 text-start"> Egp 4,458</p>
              <p className="col-2">المجموع</p>

              <p className="col-9 text-start"> مجاناً</p>
              <p className="col-2">التوصيل</p>

              <p className="col-11 p-0" style={{ fontWeight: 700 }}>
                ! لقد حصلت على خدمة شحن مجانية
              </p>

              <p className="col-9 text-start" style={{ fontWeight: 700 }}>
                {" "}
                Egp 4,458
              </p>
              <p className="col-2" style={{ fontWeight: 700 }}>
                المجموع
              </p>
            </div>
          </div>

          <div className=" mt-5  row justify-content-end">
            <button
              type="submit"
              className="cart-Show position-relative "
              style={{
                width: "90%",
                height: "50px",
              }}
            >
              <span className="  mx-3">عملية الدفع </span>
              <img
                className=" arrow-black position-absolute "
                src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg"
              ></img>
              <img
                className=" arrow-white position-absolute "
                src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-white.svg"
              ></img>
            </button>
          </div>

          <div className="offe mt-5  row justify-content-end text-end">
            <label>أدخل رمز العرض</label>

            <input
              className="mt-3"
              style={{
                width: "90%",
                height: "50px",
              }}
            />
          </div>
          <div className=" mt-5  row justify-content-end">
            <button
              type="submit"
              className="cart-Send position-relative "
              style={{
                width: "90%",
                height: "50px",
              }}
            >
              <span className="  mx-3">ارسال</span>
              <img
                className=" arrow-black position-absolute "
                src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg"
              ></img>
            </button>
          </div>
        </div>

        <div className="orders-detaiels col-8 mt-4 row justify-content-end ">
          <div
            className="ditales border border-black p-2"
            style={{ width: "90%", height: "250px" }}
          >
            <div className="content row">
              <div className="text-order col-8">
                <div className="row text-end ">
                  <div className="col-8 text-start">
                    <i className="fa-solid fa-xmark mx-3"></i>
                    Egp 4,458
                  </div>
                  <p className="col-4" style={{ fontWeight: 700 }}>
                    حذاء Adistar 2.0
                  </p>
                  <p>Core Black / Core Black / Cloud White</p>
                  <p>مقاس: 46 2/3</p>
                  <p>Only 1 Left</p>
                  <a href=""> عدل</a>
                  <p>Only 1 Left</p>

                </div>
              </div>
              <div className="im-order col-4 p-0">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
