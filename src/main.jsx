import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Page404 from "./components/Page404/Page404";
import CU_Prop from "./components/crud/CU_Prop";
import MainMange from "./components/management/MainMange";


import StudenMain from './components/Pages/Student/StudenMain'
import LessonsMain from './components/Pages/Lessons/LessonsMain'
import AcademyMain from "./components/Pages/Academy/AcademyMain";
import BaseFeildMain from "./components/Pages/Base-Feild/BaseFeildMain";
import TestCourseMain from "./components/Pages/TestCourse/TestCourseMain";
import ClassesMain from "./components/Pages/Classes/ClassesMain";
import ManagementMain from "./components/Pages/Manegement/management";
import SwAlert2 from "./components/Global/HOC/SwitetConfirm";

function Main() {


  return (
    <>
      <div className="col-12 col-md-9 col-lg-10 mainContent px-2" style={{ overflow: 'auto' }}>

        <div className=" mio unload">
          <Routes>

          //?  Redaircts
            <Route path="/" element={<Navigate to={"/students"} />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/admin-panel/" element={<Navigate to={"/admin-panel/normal/10"} />} />
            <Route path="/" element={<Navigate to={"/admin-panel/normal/10"} />} />

          //?  Page student
            <Route path="/students" element={<StudenMain />} />

          //?  Page Lessons
            <Route path="/lessons" element={<SwAlert2 >
              {
                (Confirms, Alert , headerMessage) => {
                  return <LessonsMain Confirms={Confirms} Alert={Alert} headerMessage={headerMessage}/>
                }}
            </SwAlert2>} />

          //?  Page Academys
            <Route path="/academys" element={<AcademyMain />} />

          //?  Page Base and Feild
            <Route path="/base-feilds" element={<BaseFeildMain />} />

          //?  Page Test Course
            <Route path="/test-courses" element={<TestCourseMain />} />

          //?  Page Classes
            <Route path="/classes" element={<ClassesMain />} />

          //?  Page Management
            <Route path="/management" element={<ManagementMain />} />



          //?  Creat And Update Field
            <Route path="/admin-panel/normal/:pakage/:state/:lang" element={<CU_Prop />} >
              <Route path=":EditRow" />
            </Route>
            <Route path="/admin-panel/aggresive/:pakage/:state/:lang" element={<CU_Prop />} >
              <Route path=":EditRow" />
            </Route>


            {/* //?  Management */}
            {/* <Route path="/management" element={<MainMange />} >
              <Route path=":lang" />
              <Route path=":lang/:pakage" />
            </Route> */}


          </Routes>
        </div>
      </div>
    </>
  );


}

export default Main;
