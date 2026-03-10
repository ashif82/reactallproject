import "./foodnavbar.css"
import {useState} from "react";

export function FoodNavbar(){
    const [menu,setMenu]=useState("home")
    function handleHome(){
        setMenu("home");
    }
    function handleMenu(){
        setMenu("menu");
    }
    function handleMobileApp(){
        setMenu("mobile-app");
    }
    function handleContactUs(){
        setMenu("contact-us");
    }
    return(
        <div className="container-fluid  mt-4">
          <div className="navbar">
          <div>
                <h3 className="fw-bold fs-1 tamato">Rehan.</h3>
            </div>
            <div className="headers" >
                <span onClick={handleHome}  className={menu==="home"?"active":""}>home</span>
                <span onClick={handleMenu} className={menu==="menu"?"active":""}>menu</span>
                <span onClick={handleMobileApp} className={menu==="mobile-app"?"active":""}>mobile-app</span>
                <span onClick={handleContactUs} className={menu==="contact-us"?"active":""}>contact us</span>
            </div>
            <div>
                <span className="bi bi-search ms-3">  </span>
                <span className="bi bi-bag-dash ms-3">
                <span className="dot"></span>
                </span>
                <button className="btn border border-2 ronded rounded-5 px-4 ms-3">sign in</button>
            </div>
          </div>
        

        </div>
    )
}
    
