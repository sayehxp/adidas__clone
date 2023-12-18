import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { icons } from '../../config/config';
import { FilterMenu } from './../../Components/FilterMenu/FilterMenu';
import Loading from './../../Components/Loading/Loading';
import './SubCategory.css';
import ProductCard from '../../Components/ProductCard/ProductCard';




export default function SubCategory() {
  const { catName, sub } = useParams();
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  const alternative = useSelector((state) => state.allProducts.alternative);
  const isLoadingPrd = useSelector((state) => state.allProducts.isLoading);
  const [filterMenuActive, setFilterMenuActive] = useState(false)
  const [filterResult, setFilterResult] = useState([])



  useEffect(() => {

    let srchResult = [...allProducts]
    let gender = catName == 'men' ? 'الرجال' :
      catName == 'women' ? 'النساء' : 'الأطفال';


    srchResult = srchResult.filter(prd => prd.gender == gender || prd.gender == "");

    if (sub != 'all') {
      srchResult = srchResult.filter(prd => prd.arcategory.replace(' ', '') == sub || prd.category.replace(' ', '') == sub);
    }

    if (catName == 'al-ahly') {
      srchResult = allProducts.filter(prd => prd.arcategory.replace(' ', '') == 'الأهلى');
    }

    if (catName == 'winter') {
      srchResult = allProducts.filter(prd => prd.category == 'هودي' ||prd.category == 'جاكيت' );
    }

    setFilterResult(srchResult)

  }, [allProducts])










  return (
    <>
      {isLoadingPrd ? <Loading /> :
        <>
          <div className={` ${filterMenuActive ? 'd-flex' : 'd-none'}`} >
            <FilterMenu
              setFilterResult={setFilterResult}
              filterResult={filterResult}
              allProducts={allProducts}
              alternative={alternative}
              catName={catName}
              sub={sub}
              filterMenuActive={filterMenuActive}
              setFilterMenuActive={setFilterMenuActive} />
          </div>


          <div className={`main pb-5 ${!filterResult ? 'freeze' : ''}`} style={{ 'minHeight': '50vh' }}>
            <div className="headline">

              <button className='filter-btn' onClick={() => setFilterMenuActive(!filterMenuActive)}>
                <img src={icons.filter} />
                <span>فلتر</span>
              </button>

              <span className='title fw-normal sub-title'>
                {catName == 'men' && sub != 'all' ? `${sub} للرجال ` : ` `}
                {catName == 'woemn' && sub != 'all' ? `${sub} للنساء ` : ' '}
                {catName == 'kids' && sub != 'all' ? `${sub} للاطفال ` : '  '}
              </span>

            </div>



            <div className="row prd-row">


              {
                filterResult && filterResult.map(prd =>
                  <div className="col-12 col-sm-4 col-md-3 p-0 prd-container" key={prd.id}>
                    <ProductCard prd={prd} />
                  </div>
                )
              }

            </div>

          </div>
        </>
      }
    </>
  )
}
