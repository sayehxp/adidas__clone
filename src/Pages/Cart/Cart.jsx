import React, { useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { CartViewItem } from "../../Components/CartViewItem/CartViewItem";
import { GETallProducts } from "../../Store/Slices/allProducts";
import {
  addToCart,
  getFromCart,
  removeFromCart,
} from "../../Store/Slices/cartSlice";
import { EmptyCart } from "../../components/EmptyCart/EmptyCart";
import "./Cart.css";
export default function Cart() {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  });
  const [totalPrisce, setTotalPrice] = useState(0);
  const [itemToRemove, setItemToRemove] = useState(null);
  const cart = useSelector((state) => state.cart.cart) || [];
  const [cartPrd, setCartPrd] = useState([]);
  const dispatch = useDispatch();

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const navigate = useNavigate();

  let allProducts = useSelector((state) => state.allProducts.allProducts);
  let alternative = useSelector((state) => state.allProducts.alternative);

  const effRanPrd = useRef(false);

  const handleRemoveItem = (id, size, name) => {
    setItemToRemove({ id, size, name });
    setShowConfirmationModal(true);
  };

  const handleUpdateQty = (id, size, qty) => {
    dispatch(
      addToCart({
        id: id,
        size: size,
        qty: qty,
      })
    );
  };

  //get all prd
  useEffect(() => {
    if (allProducts.length) return;
    dispatch(GETallProducts());
  }, []);

  //get cart data
  useEffect(() => {
    if (cart.length == 0) {
      dispatch(getFromCart());
    }
  }, [cart]);

  useEffect(() => {
    if (cart.length) {
      const newArr = [];
      let total = 0;
      cart.map((item) => {
        var _prd =
          allProducts.find((prd) => prd.id == item.id) ||
          alternative.find((prd) => prd.id == item.id);
        if (!_prd) return; //not exist storeDB
        total += _prd.price * item.qty;

        newArr.push({
          ..._prd,
          size: item.size,
          qty: item.qty,
        });
      });
      setCartPrd(newArr);
      setTotalPrice(total);
    }
  }, [cart]);

  return (
    <>
      <Modal
        className="modal-parent"
        show={showConfirmationModal}
        onHide={() => setShowConfirmationModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title className="remove-title">REMOVE PRODUCT? </Modal.Title>
        </Modal.Header>
        <Modal.Body className="confirm-remove">
          <p>هل أنت متأكد من إزالة المنتج التالي من العربة؟</p>
          <div style={{ fontWeight: 700 }}>{itemToRemove?.name}</div>
        </Modal.Body>
        <Modal.Footer>
          <a
            href="#"
            style={{ marginRight: 20 }}
            onClick={() => setShowConfirmationModal(false)}
          >
            إلغاء
          </a>

          <div
            className="btn-toHome"
            onClick={() => {
              dispatch(
                removeFromCart({ id: itemToRemove.id, size: itemToRemove.size })
              );
              setShowConfirmationModal(false);
              setItemToRemove(null);
            }}
          >
            <button className="btn-adidas-dark yes-btn">
              <span>Yes</span>

              <i className="arrow-front"></i>
              <i className="arrow-back"></i>
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      {cart.length == 0 || allProducts.length == 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="padge  row p-0 m-0 justify-content-end text-end ">
            <h1 className="col-4 m-2 ">
              حقيبتك
              <span className="col-2 prd-unreserve ">
                ({cart.length} منتجات محجوزة)
              </span>
            </h1>
          </div>
          <div className="cartProduct row p-0 m-0">
            <div className="orders-summery mt-4 col-12 col-md-4 my-5 align-items-center d-flex flex-column ">
              <div
                className="ordes-information border boredr-black text-end p-2"
                style={{ width: "90%" }}
              >
                <h4>ملخص الطلب </h4>

                <div className="row ">
                  <p className="col-9 text-start">
                    {" "}
                    {currency.format(totalPrisce)}
                  </p>
                  <p className="col-2">المجموع</p>

                  <p className="col-9 text-start"> مجاناً</p>
                  <p className="col-2">التوصيل</p>

                  <p className="col-11 p-0" style={{ fontWeight: 700 }}>
                    ! لقد حصلت على خدمة شحن مجانية
                  </p>

                  <p className="col-9 text-start" style={{ fontWeight: 700 }}>
                    {currency.format(totalPrisce)}
                  </p>
                  <p className="col-2" style={{ fontWeight: 700 }}>
                    المجموع
                  </p>
                </div>
              </div>
              <div
                onClick={() => navigate("/payment")}
                className="d-flex justify-content-center"
              >
                <button type="submit" className="btn btn-dark mt-4 px-5 py-2">
                  <img
                    width={25}
                    height={25}
                    className=" arrow-white mx-2"
                    src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-white.svg"
                  />
                  <span>عملية الدفع </span>
                </button>
              </div>
            </div>

            <div className="orders-detaiels col-12 col-md-8 mt-4 my-5 justify-content-end ">
              {cartPrd.map((prd) => (
                <CartViewItem
                  handleUpdateQty={handleUpdateQty}
                  handleRemoveItem={handleRemoveItem}
                  prd={prd}
                  key={uuidv4()}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
