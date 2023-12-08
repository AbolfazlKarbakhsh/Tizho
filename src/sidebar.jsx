import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

import Header from "./components/Global/header";
import Buttons_sidebar from "./components/Global/ButtonsSideBar/buttons-sidebar";

const SideBar = React.forwardRef((props, ref) => {
    const params = useLocation()
    const path = params.pathname.split("/")

    return (
        <div className="col-5 col-md-3 col-lg-2  gigamenu" ref={ref}>
            <div className="RightGigiMenu h-sm-auto">


                {/* <!-- text head  --> */}
                <Header headerColor={props.headerColor}/>


                {/* <!-- buttons  Pges--> */}
                <div className="AvatarFix sizeBtn pt-2 pb-2" >
                    <Buttons_sidebar path={path[1]} closeMobile={props.close}/>
                </div>


                {/* <!-- buttons  Mangage--> */}
                <div className="AvatarFix sizeBtn pt-2 pb-2" >

                    <NavLink to="/management" className={`nav btn  btnRightNav IconSet effect ${path[1] == 'management' ? 'activeBtn3' : 'activeBtn'}`}
                        role="button" aria-pressed="false" onClick={props.close}>
                        <span className="font2 w-75 items">مدیریت ادمین ها </span> <span
                            className="bi bi-person-gear  font4 ct-green-dark bold items"></span>
                    </NavLink>

                    <NavLink to="/management" className={`nav btn  btnRightNav IconSet effect activeBtn `}
                        role="button" aria-pressed="false" onClick={props.close}>
                        <span className="font2 w-75 items">  خروج از حساب  </span> <span
                            className="bi bi-escape  font4 ct-green-dark bold items"></span>
                    </NavLink>
                    
                </div>

                {/* <!-- exit btn  --> */}
                <div className="IconSet d-block d-md-none cl-gray pointer effect mt-3" onClick={()=>{
                    props.method();
                    props.setheaderColor('0')
                }}>
                    <span className="bi-box-arrow-right font4 bold"></span><span className="font2">خروج</span>
                </div>

            </div>
        </div>
    )
})

export default SideBar;