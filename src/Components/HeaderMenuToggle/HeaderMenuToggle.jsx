//____________HEADERMENUTOGGLE________________
import React, { useEffect, useState } from 'react'
import './HeaderMenuToggle.css'
import { useNavigate } from 'react-router-dom';

//__________________________
const HeaderMenuToggle = ({ setMenuToggleVisible, menuToggleVisible }) => {
  const [menActive, setMenActive] = useState(false);
  const [womenActive, setWomenActive] = useState(false);
  const [kidsActive, setKidsActive] = useState(false);
  const navigate = useNavigate();


  return (
    <div className={`${menuToggleVisible ? 'showToggleMenu' : ''} container-menu-toggle d-lg-none `}>

      <div className="main-toggle-menu">
        <div className='col-12 d-flex justify-content-center align-items-center'>

          <div className="logo me-auto">
            <img
              src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwe85a3da9/images/adidas_logo.svg'
              width={70}
              height={60}
            />
          </div>

          <div className="icon me-auto ms-4 h4" onClick={() => setMenuToggleVisible(false)}>
            <i className="fa-solid fa-xmark" />
          </div>




        </div>

        <ul className="menu-toggle-links1 list-none">
          <li onClick={() => setMenActive(true)}>الرجال</li>
          <li onClick={() => setWomenActive(true)}>النساء</li>
          <li onClick={() => setKidsActive(true)}>الاطفال</li>
          <li>الرياضات</li>
          <li>اسلوب حياه</li>
          <li>تخفيضات يوم السنجلز</li>
        </ul>

        <ul className="menu-toggle-links2 list-none">
          <li>سجّل الدخول </li>
          <li>لائحة املنتجات التى اتمناها</li>
          <li>متتبع الطلب</li>
          <li>المرتجعات</li>
        </ul>

        <ul className="menu-toggle-links3 list-none">
          <li>AdiClub</li>
          <li>Store Finder</li>
          <li>مساعدة</li>
        </ul>
      </div>

      <div className={`toggle-menu-men ${menActive ? 'left-0' : ''}`}>

        <div className='col-12 d-flex justify-content-center align-items-center pe-4'>
          <i className="fa-solid fa-chevron-left" onClick={() => setMenActive(false)} />
          <div className="logo me-auto">
            <img
              src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwe85a3da9/images/adidas_logo.svg'
              width={70}
              height={60}
            />
          </div>

          <div className="icon me-auto ms-4 h4" onClick={() => setMenuToggleVisible(false)}>
            <i className="fa-solid fa-xmark" />
          </div>




        </div>

        <ul className="menu-toggle-links1 list-none">
          <li onClick={() => {
            navigate(`/srch/men/أحذية`);
            setMenuToggleVisible(false);
          }}>احذية </li>
          <li onClick={() => {
            navigate(`/srch/men/تيشيرت`);
            setMenuToggleVisible(false);
          }}>تيشيرتات</li>
          <li onClick={() => {
            navigate(`/srch/men/شورت`);
            setMenuToggleVisible(false);
          }}>شورت </li>
          <li onClick={() => {
            navigate(`/srch/men/هودي`);
            setMenuToggleVisible(false);
          }}>هودى</li>

        </ul>



      </div>


      <div className={`toggle-menu-women ${womenActive ? 'left-0' : ''}`}>
        <div className='col-12 d-flex justify-content-center align-items-center pe-4'>
          <i
            className="fa-solid fa-chevron-left"
            onClick={() => setWomenActive(false)}
          />
          <div className="logo me-auto">
            <img
              src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwe85a3da9/images/adidas_logo.svg'
              width={70}
              height={60}
            />
          </div>

          <div className="icon me-auto ms-4 h4" onClick={() => setMenuToggleVisible(false)}>
            <i className="fa-solid fa-xmark" />
          </div>




        </div>

        <ul className="menu-toggle-links1 list-none">
          <li onClick={() => {
            navigate(`/srch/women/جاكيت`);
            setMenuToggleVisible(false);
          }}>جاكيت نسائى</li>
          <li onClick={() => {
            navigate(`/srch/women/بنطال`);
            setMenuToggleVisible(false);
          }}>بنطال </li>
          <li onClick={() => {
            navigate(`/srch/women/تيشيرت`);
            setMenuToggleVisible(false);
          }}>تيشيرتات</li>
          <li onClick={() => {
            navigate(`/srch/women/أحذية`);
            setMenuToggleVisible(false);
          }}>احذية </li>

        </ul>



      </div>

      <div className={`toggle-menu-kids ${kidsActive ? 'left-0' : ''}`}>
        <div className='col-12 d-flex justify-content-center align-items-center pe-4'>
          <i
            className="fa-solid fa-chevron-left"
            onClick={() => setKidsActive(false)}
          />
          <div className="logo me-auto">
            <img
              src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwe85a3da9/images/adidas_logo.svg'
              width={70}
              height={60}
            />
          </div>

          <div className="icon me-auto ms-4 h4" onClick={() => setMenuToggleVisible(false)}>
            <i className="fa-solid fa-xmark" />
          </div>




        </div>

        <ul className="menu-toggle-links1 list-none">
          <li onClick={() => {
            navigate(`/srch/kids/ملابس`);
            setMenuToggleVisible(false);
          }}> ملابس للأطفال</li>
          <li onClick={() => {
            navigate(`/srch/women/أحذية`);
            setMenuToggleVisible(false);
          }}>أحذية</li>
          <li>إكسسوارات </li>


        </ul>



      </div>



    </div>
  )
}

export default HeaderMenuToggle