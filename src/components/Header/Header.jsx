import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import './HeaderRwd.css'
import EgFlag from '../../assets/icons/EgFlag.png';
import HeaderPromotion from '../HeaderPromotion/HeaderPromotion';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';

function Header() {
  // const favorites = useSelector((state)=> state.favorites.favorites);
  const Navigate =useNavigate();
  return (


    <header>
      <HeaderPromotion />


      <Navbar data-bs-theme="light" className='d-flex flex-column' id='nav'>


        <Nav id='navTop' className="w-100 d-none d-lg-flex m-0" >
          <img src={EgFlag} width={20} height={15} className='my-auto mx-3  ' />
          <Nav.Link onClick={()=> Navigate('login')} >سجل الدخول</Nav.Link>
          <Nav.Link >المرتجعات</Nav.Link>
          <Nav.Link >adiclub</Nav.Link>
          <Nav.Link >منتبع الطلب</Nav.Link>
          <Nav.Link >مساعدة</Nav.Link>
          <Nav.Link > Egypt موقع اديداس الرسمى</Nav.Link>
        </Nav>



        <Nav id='navBottom' className='flex-row-reverse w-100 m-0 p-0'>

        <div className="nav-toggle-btn col-1 d-lg-none order-1"><i className="fa fa-bars"/></div>

        
          <Navbar.Brand className='col-8 col-lg-2 adidas-logo d-flex justify-content-center me-4 order-4 order-lg-1 '  onClick={()=> Navigate('/')} >
            <img src='https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwe85a3da9/images/adidas_logo.svg' />
          </Navbar.Brand>
        


          

          <ul  id='navLinksBottom' className='col-lg-5 d-none d-lg-flex flex-row-reverse order-1 m-0' role='menu'>
            <Nav.Link onClick={()=> Navigate('men')} role="menuitem">الرجال</Nav.Link>
            <Nav.Link onClick={()=> Navigate('women')} role="menuitem">النساء</Nav.Link>
            <Nav.Link onClick={()=> Navigate('kids')} role="menuitem">الاطفال</Nav.Link>
            <Nav.Link onClick={()=> Navigate('sports')} role="menuitem">الرياضات</Nav.Link>
            <Nav.Link onClick={()=> Navigate('lifestyle')} role="menuitem">اسلوب حياه</Nav.Link>
            <Nav.Link onClick={()=> Navigate('dsicounts')} role="menuitem" style={{ color: '#e82c2c' }}>تخفيضات</Nav.Link>
           
          </ul>


          <div className="col-3 col-lg-5 d-flex order-4 m-0">
      
      
            <div className="utility_nav">
            {/* <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwf481bbac/images/search_icon.svg" className='d-lg-none'  title="srch" /> */}

            <a className='srchbtn ms-0 pb-2'>
              <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw16c0c20e/images/search.svg" title="srch" />
            </a>
          
          
            <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw217f2aa1/images/profile.svg" title="Profile" />
          
            <div onClick={ ()=>{Navigate("/WishList")}}>
            <div  className="notification">
            <img className='imgnotif' src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/ar_EG/v1697860680345/images/wishlist.svg" title="wishlist" />
           {/* <span className="badge">{favorites.length}</span> */}
         </div>
          </div>


          
            <img src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwa2f65e79/images/bag%20empty.svg" title="cart" />
            <img  src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw33f9c777/images/bag_full.svg" title="cart" className='d-none' />
          </div>


          <input type='text' id='srchinput' className='ms-0 mt-1 d-none d-lg-block' placeholder=' بحث' dir='rtl' />

          </div>



        </Nav>

















      </Navbar>
    </header>


  )
}

export default Header