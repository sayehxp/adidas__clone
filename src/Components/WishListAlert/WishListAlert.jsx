import React, { useContext, useEffect } from 'react';
import './WishListAlert.css';
import appContext from '../../Context/appContext';

const WishlistAlert = () => {
  const { setActiveWishlistAlert, activeWishlistAlert, msgWishListAlert } = useContext(appContext)
  const startTimer = setTimeout(() => setActiveWishlistAlert(false), 1500);
  useEffect(() => {
    startTimer
    return () => {
      clearTimeout(startTimer);
    }
  }, [activeWishlistAlert])


  return (
    <div
      className={activeWishlistAlert ? 'alert-container p-4' : 'd-none'}
      style={{ 'top': window.scrollY + 50 }}
    >
   
      <span>
        {msgWishListAlert}
      </span>
    </div>
  );
}

export default WishlistAlert;
