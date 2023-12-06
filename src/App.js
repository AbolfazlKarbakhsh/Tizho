import React, { useEffect, useRef, useState } from "react";
import Main from "./main";
import SideBar from "./sidebar";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/global/header";
import Loader from "./components/global/Loder";
import useJSP from "./hooks/useJSP";
import GetPackages from "./Servisers/GetsApi"

function App() {

    const Tag = useRef(null);
    const TagFotherGiga = useRef(null);
    const jpAxios = useJSP();
    const [isLoder, setLoder] = useState("null")
    const [pakages, setPakaegs] = useState([])

    const HandelReGetPack = () => {
        GetPackages(jpAxios, 'index.php?getPackageList', setLoder, setPakaegs);
    }

    useEffect(() => {
        GetPackages(jpAxios, 'index.php?getPackageList', setLoder, setPakaegs);
    }, []);

    const GigaMenu = () => {
        if (Tag.current.style.cssText === "width: 100% !important;") {

            Tag.current.classList.toggle("width-100");
            TagFotherGiga.current.classList.toggle("width-100");
            document.querySelector("body").classList.toggle("overFlowNone");

        } else {
            Tag.current.classList.toggle("width-100");
            TagFotherGiga.current.classList.toggle("width-100");
            document.querySelector("body").classList.toggle("overFlowNone");
        }
    }

    const GigiClose = () => {
        Tag.current.classList.remove("width-100");
        TagFotherGiga.current.classList.remove("width-100");
        document.querySelector("body").classList.remove("overFlowNone");
    }


    return (
        <BrowserRouter >
            <>
                {/* <!-- giga open dark--> */}
                <div className="GigaMenuFother animatinLoad" ref={TagFotherGiga} onClick={GigaMenu}></div>


                <div className="panelMobilTopNav col-12  d-md-none overflow-hidden animatinLoad">

                    <div>
                        <span className="IconSet bi-filter-left activeBtn font9 bold p-3 rounded effect" onClick={GigaMenu}></span>
                    </div>

                    {/* <!-- text head  --> */}
                    <Header fotherClass={"d-block d-md-none"} />
                    
                </div>

                <div className=" container-xl  CenterBox animatinLoad">

                    <div className="PanelCenter row m-0">
                        <Main />
                        <SideBar ref={Tag} method={GigaMenu} close={GigiClose} pakages={pakages} />
                    </div>
                </div>

                {/* <Loader Error={isLoder} Isloding={isLoder} GetPackages={HandelReGetPack} /> */}
            </>
        </BrowserRouter>
    )
}

export default App