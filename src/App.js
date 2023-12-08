import React, { useEffect, useRef, useState } from "react";
import Main from "./main";
import SideBar from "./sidebar";
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Global/header";
import Loader from "./components/Global/Loder";
import useJSP from "./hooks/useJSP";
import GetPackages from "./Servisers/GetsApi"

function App() {

    const Tag = useRef(null);
    const TagFotherGiga = useRef(null);
    const jpAxios = useJSP();
    const [isLoder, setLoder] = useState("null")
    const [pakages, setPakaegs] = useState([])
    const [headerColor, setheaderColor] = useState('0')

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
        setheaderColor('0')
    }


    return (
        <BrowserRouter >
            <>
                {/* <!-- giga open dark--> */}
                <div className="GigaMenuFother animatinLoad" ref={TagFotherGiga} onClick={()=>{
                    GigaMenu();
                    setheaderColor('0')
                }}></div>


                <div className="panelMobilTopNav col-12  d-md-none overflow-hidden animatinLoad ">

                    <div>
                        <span className="IconSet bi-filter-left activeBtn font9 bold p-3 rounded effect" onClick={()=>{
                            GigaMenu();
                            setheaderColor('1')
                        }}></span>
                    </div>

                    {/* <!-- aside in header--> */}
                    <Header headerColor={headerColor} />

                </div>

                <div className=" CenterBox animatinLoad">

                    <div className="PanelCenter row m-0">
                        <Main />
                        {/* asaide in mobile and deck top include header titr comp */}
                        <SideBar ref={Tag} method={GigaMenu} close={GigiClose} pakages={pakages} headerColor={headerColor} setheaderColor={setheaderColor}/>
                    </div>
                </div>

                <Loader Error={isLoder} Isloding={isLoder} GetPackages={HandelReGetPack} />
            </>
        </BrowserRouter>
    )
}

export default App