import "./login.css";

import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, database, provider } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import validator from "validator";
import { collection, getDocs } from "firebase/firestore";


export default function Login() {
  const navigate = useNavigate();
  const [fname, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({
    ema: "",
    passwor: ""

  });

  const onLogin = async (e) => {



    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        navigate("/")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(" هناك خطا فى البريد لالكترونى او كلمة السر  ")

        console.log(errorCode, errorMessage)
      });
    const res = await getDocs(collection(database, "users"));

    const userNam = res.docs.forEach((doc) => {

      if (doc.data().email == email) {

        const fname = doc.data().firstname;
        const phoneNum = doc.data().phone;
        localStorage.setItem("name", fname);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phoneNum);
        return doc.data()
      }



    })
  }

  const handelEmail = (e) => {
    setEmail(e.target.value)
    if (!validator.isEmail(email)) {
      setMessage({ ema: "يرجى إدخال عنوان بريد إلكتروني صالح. . " });
    } else {
      setMessage({ ema: "" });
    }

  }
  const handelpassword = (e) => {
    setPassword(e.target.value)

    let passWordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$/

    if (!passWordRegex.test(password)) {
      setMessage({ passwor: "من فضلك أدخل رقمك السري. الرجاء استخدام الأحرف اللاتينية فقط. " });
      setMessage({ passwor: "" });
    } else {
      setMessage({ passwor: "" });
    }


  }
  const sinBYGoogel = () => {

    signInWithPopup(auth, provider).then((res) => {
      alert(111);
      localStorage.setItem("name", (res.user.displayName))
      localStorage.setItem("email", (res.user.email))
      // navigate("/")
      // window.location.reload()

    }).catch((err) => {
      console.log(err);
    })


  }
  return (
    <>

      <div className="adidas-login">
        <nav className=" row justify-content-end mx-4 login-logo">
          <img
            style={{ width: "100px", height: "50px" }}
            src="https://i.pinimg.com/originals/e3/f4/6d/e3f46d6b1f2ddde857caaa388f50ad5f.png"
          />
        </nav>
        <hr />
        <div className=" d-flex justify-content-center continer">
          <div
            className="offset-1-1 text-end  flex-column adidas-login-text "
            style={{ width: "50%" }}
          >
            <div style={{ width: "70%" }}>
              <h3 style={{ fontWeight: "bolder", marginBottom: "30px" }}>
                فات اليوم ADICLUB انضم الى
              </h3>

              <p>
                سوف تحصل على مكافآتك من خلال ما تحب القيام به adiClub كعضو فى
                فريق قم بالتسجيل الآن واحصل على وصول فوري إلى مزايا المستوى
                الأول
              </p>
              <p>
                {" "}
                قسيمة شرائية بخصم 20% على عملية شرائك القادمة
                <i className="fa-solid fa-check mx-2"></i>
              </p>
              <p>
                الوصول إلى منتجات وتخفيضات خاصة بالأعضاء فقط
                <i className="fa-solid fa-check mx-2"></i>
              </p>
              <p>
                {" "}
                الوصول إلى تطبيقات أديداس للجري والتدريب
                <i className="fa-solid fa-check mx-2"></i>
              </p>

              <p>
                {" "}
                العروض الخاصة والعروض الترويجية
                <i className="fa-solid fa-check mx-2"></i>
              </p>

              <p>
                انضم الآن وابدأ بكسب النقاط وانتقل لمستويات جديدة واحصل على
                المزيد من المكافآت والفوائد adiClub. من
              </p>

              <div>
                {" "}
                <button
                  className="login_buttne position-relative  m-4 "
                  style={{ width: "40%", height: "50px" }}
                >
                  <a
                    className="text-light text-decoration-none"
                    href="/Register"
                  >
                    سجل الان{" "}
                  </a>
                  <img
                    className=" arrow-login position-absolute "
                    src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-white.svg"
                  ></img>
                </button>{" "}
              </div>

              <img
                style={{ width: "60%" }}
                src="https://eu.idp.adidas.com/assets/images/adidas/universal-login/adiclub.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" offset-1-1 text-end  adidas-login-form ">
            <div className="login-logo-small-siez ">
              {" "}
              <img
                style={{ width: "100px", height: "50px" }}
                src="https://i.pinimg.com/originals/e3/f4/6d/e3f46d6b1f2ddde857caaa388f50ad5f.png"
              />
            </div>

            <div className="col-12  cild-lodin-form pe-4">
              <h2 className="mt-5">سجّل الدخول</h2>


              <form onSubmit={onLogin} action="">
                <label className="mt-3" htmlFor="#">

                  <i
                    className="fa-solid fa-star "
                    style={{
                      color: "red",
                      fontSize: "7px",
                      marginBottom: "5px",
                    }}
                  />
                  البريد الالكترونى
                </label>
                <div>
                  <input
                    style={{ width: "90%", height: "50px" }}
                    type="email"
                    value={email}
                    onChange={(e) => { handelEmail(e) }}

                  />
                  <p style={{ color: "red" }}> {message.ema} </p>

                </div>


                <label htmlFor="#pwd">

                  <i className="fa-solid fa-star mx-1"
                    style={{ color: "red", fontSize: "7px", marginBottom: "5px", }}
                  />
                  كلمة السرّ
                </label>
                <div>
                  <input
                    style={{ width: "90%", height: "50px" }}
                    className="w-90"
                    type="password"
                    name="pwd"
                    id="pwd"
                    value={password}
                    onChange={(e) => { handelpassword(e) }}
                  />
                  <p style={{ color: "red" }}> {message.passwor} </p>

                </div>



                <div className="row mt-4 p-0">



                  <div className="col-11" >
                    أبقنى مسجل الدخول.
                    <a href="#">مزيد من المعلومات</a>
                  </div>



                  <div className=" -3 col-1 form-check m-0 p-0">
                    {" "}
                    <input
                      type="checkbox"
                      style={{
                        border: "1px solid black",
                        height: "20px",
                        width: "20px",
                      }}

                    />
                  </div>


                  <div className="d-flex flex-column align-items-center my-5 px-5">



                    <button type="submit" className="btn btn-dark d-flex align-items-center justify-content-center w-75">
                      <img
                        className="arrow-login"
                        width={15}
                        src="https://www.adidas.com.eg/on/demandware.static/Sites-adidas-EG-Site/-/default/dw02d624d9/images/long-arrow-right-white.svg"
                      />
                      <span className="mx-3"> تسجيل الدخول</span>
                    </button>






                    <button className="btn btn-light w-75 mt-3 border border-3" onClick={(e) => {
                      sinBYGoogel();
                      e.preventDefault();
                    }}>
                      <img
                        width={25}
                        height={25}
                        src="data:image/png;base64,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"
                      />
                      <span>Google</span>

                    </button>




                  </div>









                </div>
              </form>




            </div>
          </div>
        </div>
      </div>
    </>
  );
}
