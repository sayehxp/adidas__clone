import React from 'react'
import "./Empty.css"
import { useNavigate } from 'react-router-dom';
export const EmptyCart = () => {

  const Navigate = useNavigate()
  return (





    <>
      <div className=" container   empty text-end p-3 ">
        <h2 >عربة المشتريات فارغة
        </h2>
        <p>حالما تُضيف شيء إلى عربتك، سيظهر هنا. هل أنت مستعد لتبدأ؟</p>

        <div className="   m-5" onClick={() => {
          Navigate("/Home");
        }}>
          <button
            type="submit"
            className="btn btn-dark text-light "
      
          >
            
            <img
              className=" arrow-white"
              width={20}
              height={20}
              src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-white.svg"
            />
            <span className="  mx-3">

              استمر فى التسوق
            </span>
  
          </button>
        </div>



      </div>

    </>
  )
}
