//____________CARTITEM________________
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Store/Slices/cartSlice";
import "./CartItem.css";
//__________________________

const CartItem = ({ prd }) => {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  });
  const dispatch = useDispatch();

  const handleUpdateQty = (newQty) => {
    dispatch(
      addToCart({
        id: prd.id,
        size: prd.size,
        qty: newQty,
      })
    );
  };

  const handleRemoveItem = () => {
    dispatch(
      removeFromCart({
        id: prd.id,
        size: prd.size,
      })
    );
  };

  return (
    <>
      {prd && (
        <div className="prd-item my-2 d-flex">
          <img
            src={prd.imgurl[0]}
            className="ms-3 col-6 col-md-5"
            height={140}
          />

          <div className="prd-descr">
            <div className="d-flex">
              <span className="fw-bold">{prd.name}</span>

              <i
                className="fa-solid fa-xmark m-auto ms-0"
                onClick={() => handleRemoveItem()}
              />
            </div>

            <div className="prd-price ">
              <del className="prev-price me-md-2 d-block d-md-inline">
                {currency.format(prd.oldprice)}
              </del>
              <span className="cur-price ">
                {currency.format(prd.price * prd.qty)}
              </span>
            </div>

            <span>
              {" "}
              مقاس : <small>{prd.size}</small>{" "}
            </span>

            <select
              className="prd-qty"
              onChange={(e) => handleUpdateQty(e.target.value)}
              defaultValue={prd.qty}
            >
              {Array(prd.availablestock[prd.availablesize.indexOf(prd.size)])
                .fill()
                .map((_, i) => (
                  <option value={i + 1} key={i}>
                    {i + 1}
                  </option>
                ))}
            </select>

            <div className="prd-stock mt-3">
              <span className="text-secondary">
                <small>
                  only {prd.availablestock[prd.availablesize.indexOf(prd.size)]}{" "}
                  left
                </small>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
