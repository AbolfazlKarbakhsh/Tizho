import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "./components/Page404/Page404";
import PakagePropAggersive from "./components/pakages-prop/PakagePropAggersive";
import PakagePropNormal from "./components/pakages-prop/PakagePropNormal";
import CU_Prop from "./components/crud/CU_Prop";
import MainMange from "./components/management/MainMange";


function Main() {


  return (
    <>
      <div className="col-12 col-md-9 col-lg-10 mainContent px-2" style={{ overflow: 'auto' }}>

        <div className=" mio unload">
          <Routes>

          //?  Redaircts
            <Route path="/" element={<Navigate to={"/karbakhsh/admin-panel/normal/10"} />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/karbakhsh/admin-panel/" element={<Navigate to={"/karbakhsh/admin-panel/normal/10"} />} />
            <Route path="/karbakhsh/" element={<Navigate to={"/karbakhsh/admin-panel/normal/10"} />} />

          //?  Pakages
            <Route path="/karbakhsh/admin-panel/normal/:pakage" element={<PakagePropNormal />} />
            <Route path="/karbakhsh/admin-panel/aggresive/:pakage" element={<PakagePropAggersive />} />

          //?  Creat And Update Field
            <Route path="/karbakhsh/admin-panel/normal/:pakage/:state/:lang" element={<CU_Prop />} >
              <Route path=":EditRow" />
            </Route>
            <Route path="/karbakhsh/admin-panel/aggresive/:pakage/:state/:lang" element={<CU_Prop />} >
            <Route path=":EditRow" />
            </Route>


          //?  Management
            <Route path="/karbakhsh/admin-panel/management" element={<MainMange />} >
              <Route path=":lang" />
              <Route path=":lang/:pakage" />
            </Route>


          </Routes>
        </div>
      </div>
    </>
  );


}

export default Main;
