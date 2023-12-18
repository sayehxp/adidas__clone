export const icons = {

  wishlistEmpty: 'https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwaf3d05bb/images/wishlist-empty.svg',
  delivery: 'https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw000a0c97/images/adidas/icons/delivery.svg',
  deliverySameDay: 'https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwf8866ff0/images/adidas/icons/delivery-same-day.svg',
  cod: "https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/ar_EG/dw80a4e210/COD.png",
  lock: "https://www.adidas.com.eg/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/ar_EG/dw69c97df7/LOCK.jpg",
  arrowRightBlack: "https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-black.svg",
  filter: "https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwb6b16ff1/images/icon_filter.svg",
  wishlistFilled: "https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw37344bb5/images/wishlist.svg"

}

export const Local_Images = {
  ad_mobile: 'https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/ar_EG/dw02c98d1f/em-ae-ALAHLY-football-fw23-launch-hp-mh-m-ar.jpg',
  ad_desktop: 'https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/ar_EG/dw7212e6b9/em-ae-ALAHLY-football-fw23-launch-hp-mh-d-ar.jpg',
  home_mobile: 'https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw240d5048/MENA_Local_Activations/em-eg-Wintershop-originals-fw23-launch-hp-tc-m.jpg',
  home_desktop: 'https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwf32be46a/MENA_Local_Activations/em-eg-Wintershop-originals-fw23-launch-hp-tc-d.jpg',
}

export const heartIconPath = {
  empty: "https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dwaf3d05bb/images/wishlist-empty.svg",
  filled: "https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw37344bb5/images/wishlist.svg"
}



export const mainCategoryImages = {
  menCover: "https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dw2fa53bef/images/fw23-brand-campaign-launch-glp-m-mh-d.jpg",
  womenCover: "https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwa73cc9f5/images/fw23-brand-campaign-launch-glp-w-mh-d.jpg",
  kidsCover: "https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/ar_EG/dwe77a1594/0000_NMDKIDS_D.jpg"
}



export const swiperBreakPoints1 = {

  0: {
    slidesPerView: 2,
    speed: 400,
    slidesPerGroup: 2
  },

  768: {
    slidesPerView: 4,
    speed: 500,
    slidesPerGroup: 3
  }

}

export const swiperBreakPoints2 = {


  0: {
    slidesPerView: 1,
    speed: 400,
    slidesPerGroup: 1
  },

  768: {
    slidesPerView: 4,
    speed: 500,
    slidesPerGroup: 3
  }

}

export const swiperBreakPoints3 = {




  0: {
    slidesPerView: 2,
    speed: 400,
    slidesPerGroup: 1
  },
  1026: {
    slidesPerView: 4,
    speed: 400,
    slidesPerGroup: 1
  },







}
export const handleSwiperNav = (num) => {
  return {
    nextEl: `.swiper${num}-btn-next`,
    prevEl: `.swiper${num}-btn-prev`,
    disabledClass: `.swiper${num}-button-disabled`
  }

}

export const pagination = {
  clickable: true,

  bulletClass: `swiper-pagination-bullet`,
  renderBullet: function (_, className) {
    return `<span className="${className}"></span>`;
  },
};