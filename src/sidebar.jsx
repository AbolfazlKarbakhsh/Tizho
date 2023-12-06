import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import BtnHeaderSideBar from "./components/sidebar/btnHeaderSideBar"
import Buttons_sidebar from "./components/sidebar/buttons-sidebar";
import Header from "./components/global/header";

const SideBar = React.forwardRef((props, ref) => {

    const [OrangeBtn, setOrangeBtn] = useState('');
    const [BlueBtn, setBlueBtn] = useState('');
    const params = useLocation()

    useEffect(() => {
        setOrangeBtn(params.pathname.split("/")[3])
        setBlueBtn(params.pathname.split("/")[4])
    });

    return (
        <div className="col-5 col-md-3 col-lg-2  gigamenu" ref={ref}>
            <div className="RightGigiMenu h-sm-auto">


                {/* <!-- text head  --> */}
                <Header fotherClass={"d-none d-md-block"}/>


                {/* <!-- buttons  header--> */}
                <div className="AvatarFix sizeBtn pt-2 pb-2" >
                    <BtnHeaderSideBar p={props.close} OrangeBtn={OrangeBtn} />
                </div>



                {/* <!-- buttons  Pakages--> */}
                <div className="AvatarFix sizeBtn pt-2 pb-2" >
                    <Buttons_sidebar p={props.close} BlueBtn={BlueBtn} OrangeBtn={OrangeBtn} pakages={props.pakages} />
                </div>


                {/* <!-- buttons  header--> */}
                <div className="AvatarFix sizeBtn pt-2 pb-2" >

                    <NavLink to="/karbakhsh/admin-panel/management" className={`nav btn  btnRightNav IconSet effect  ${OrangeBtn == 'management' ? 'activeBtn2' : 'activeBtn'}`}
                        role="button" aria-pressed="false" onClick={props.close}>
                        <span className="font2 w-75 items">مدیریت </span> <span
                            className="bi bi-building-fill-gear  font4 ct bold items"></span>
                    </NavLink>
                    
                </div>

                {/* <!-- exit btn  --> */}
                <div className="IconSet d-block d-md-none cl-gray pointer effect mt-3" onClick={props.method}>
                    <span className="bi-box-arrow-right font4 bold"></span><span className="font2">خروج</span>
                </div>

            </div>
        </div>
    )
})

export default SideBar;