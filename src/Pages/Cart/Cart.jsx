import React, { useEffect, useRef, useState } from "react";
import { EmptyCart } from "../../components/EmptyCart/EmptyCart";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { GETallProducts } from "../../Store/Slices/allProducts";
import Dropdown from "react-bootstrap/Dropdown";
import { CartViewItem } from "../../components/CartViewItem/CartViewItem";

export default function Cart() {
  const [Cartprd, setCartprd] = useState([]);
 
  const [totalPrisce,setTotalPrice]=useState(0)
  const CartRedux = useSelector((state) => state.Cart.Cartp);
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const effRan = useRef(false);

  useEffect(() => {
    if (allProducts.length == 0) return;
    const newArr = [];
    let total=0
    CartRedux.map((product) => {
      let orginalprd = allProducts.find((x) => x.id == product.id);

      let newOrginalPrd = {
        ...orginalprd,
        cartSize: product.size,
        cartQty: product.qty,
      };
      console.log(newOrginalPrd);

      newArr.push(newOrginalPrd);
      // setTotalPrice(product.price)
      
      total+= parseInt(newOrginalPrd.cartQty*newOrginalPrd.price)

    });   
    setCartprd(newArr);
    setTotalPrice(total)
  }, [allProducts]);

  useEffect(() => {
    if (effRan.current) return;

    if (!allProducts.length) {
      dispatch(GETallProducts());
      console.log("request pai");
    }

    return () => {
      effRan.current = true;
    };
  }, []);



  return (
    <>  
    {(Cartprd.length==0)? 
      <EmptyCart/> 
      :<>
 <div className="padge  row justify-content-end text-end ">
        <h1 className="col-4 m-2 ">
          حقيبتك
          <span className="col-2 prd-unreserve ">({Cartprd.length} منتجات غير محجوزة)</span>
        </h1>
      </div>
      <div className="cartProudact d-flex">
        <div
          className="orders-summery mt-4 col-4 row justify-content-end"
          style={{ height: "200px" }}
        >
          <div
            className="ordes-information border boredr-black text-end p-2"
            style={{ width: "90%" }}
          >
            <h4>ملخص الطلب </h4>

            <div className="row ">
              <p className="col-9 text-start">Egp {totalPrisce}</p>
              <p className="col-2">المجموع</p>

              <p className="col-9 text-start"> مجاناً</p>
              <p className="col-2">التوصيل</p>

              <p className="col-11 p-0" style={{ fontWeight: 700 }}>
                ! لقد حصلت على خدمة شحن مجانية
              </p>

              <p className="col-9 text-start" style={{ fontWeight: 700 }}>
               
                Egp {totalPrisce}
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
          {Cartprd.map((prd) => 
          <CartViewItem  totalPrisce={totalPrisce} setTotalPrice={setTotalPrice} prd={prd} key={prd.id}/>
          )}
        </div>
      </div>
      </>
      }
     </>
  );
}
