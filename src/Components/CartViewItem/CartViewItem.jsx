import React from "react";
import "./CartViewItem.css";

export const CartViewItem = ({ prd, handleUpdateQty, handleRemoveItem }) => {
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EGP",
  });

  return (
    <>
      {prd && (
        <div className="CartViewItem border border-1 row ">
 

          <div className="col-6 col-md-8 p-0 px-2  d-flex flex-column align-items-end">
            <i
              className="fa-solid fa-xmark m-2 me-auto"
              onClick={() => handleRemoveItem(prd.id, prd.size, prd.name)}
            />

            <div className="d-flex justify-content-between w-100 my-1">
              <span className="cart_view_item--price  d-none d-md-flex">
                {currency.format(prd.qty * prd.price)}
              </span>
              <span className="cart_view_item--name">{prd.name}</span>
            </div>

            <span>Core Black / Core Black / Cloud White</span>
            <span className="mt-2">مقاس: {prd.size}</span>
            <span>Only 1 Left</span>
            <a href="#"> عدل</a>

            <select
              className="prd-qty px-3  py-2  mt-md-3 me-auto me-md-2 d-none d-md-flex"
              style={{
                borderRadius: "10%",
              }}
              onChange={(e) =>
                handleUpdateQty(prd.id, prd.size, e.target.value)
              }
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
          </div>
          <img
            className="col-6 col-md-4 p-0"
            src={prd.imgurl[0]}
            height={"100%"}
          />
          <div
            className="row 
          py-2  flex-row-reverse align-items-center border d-md-none  p-0 m-0"
          >
            <span className="col-2">الكمية</span>
            <select
              className="border-0 col-2 py-1 d-md-none"
              dir="rtl"
              onChange={(e) =>
                handleUpdateQty(prd.id, prd.size, e.target.value)
              }
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

            <span
              className="cart_view_item--price  col-4
             me-auto"
            >
              {currency.format(prd.qty * prd.price)}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
