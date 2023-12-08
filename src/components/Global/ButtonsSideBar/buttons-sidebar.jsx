import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'

function Buttons_sidebar({path , closeMobile}) {
    return (
        <>
            <NavLink to={`/students`}  onClick={closeMobile}
                className={`nav btn  btnRightNav IconSet  ${path == 'students' ? 'activeBtn3' : 'activeBtn'} `} role="button"
                aria-pressed="false" >
                <span className="font2 items w-75">امور دانش آموزان</span> <span
                    className="bi bi-people bi-people-fill font4  ct-green-dark bold items"></span>
            </NavLink>

            <NavLink to={`/lessons`} onClick={closeMobile}
                className={`nav btn  btnRightNav IconSet ${path == 'lessons' ? 'activeBtn3' : 'activeBtn'} `} role="button"
                aria-pressed="false" >
                <span className="font2 items w-75">دروس  </span> <span
                    className="bi bi-journals font4  ct-green-dark bold items"></span>
            </NavLink>

            <NavLink to={`/academys`} onClick={closeMobile}
                className={`nav btn  btnRightNav IconSet ${path == 'academys' ? 'activeBtn3' : 'activeBtn'}`} role="button"
                aria-pressed="false" >
                <span className="font2 items w-75"> آموزشگاه ها   </span> <span
                    className="bi bi-buildings font4  ct-green-dark bold items"></span>
            </NavLink>


            <NavLink to={`/base-feilds`} onClick={closeMobile}
                className={`nav btn  btnRightNav IconSet ${path == 'base-feilds' ? 'activeBtn3' : 'activeBtn'}`} role="button"
                aria-pressed="false" >
                <span className="font2 items w-75">  پایه و رشته   </span> <span
                    className="bi bi-diagram-3 font4  ct-green-dark bold items"></span>
            </NavLink>


            <NavLink to={`/test-courses`} onClick={closeMobile}
                className={`nav btn  btnRightNav IconSet ${path == 'test-courses' ? 'activeBtn3' : 'activeBtn'}`} role="button"
                aria-pressed="false" >
                <span className="font2 items w-75">  آزمون ها   </span> <span
                    className="bi bi-clipboard font4  ct-green-dark bold items"></span>
            </NavLink>

            <NavLink to={`/classes`} onClick={closeMobile}
                className={`nav btn  btnRightNav IconSet ${path == 'classes' ? 'activeBtn3' : 'activeBtn'}`} role="button"
                aria-pressed="false" >
                <span className="font2 items w-75">   کلاس ها   </span> <span
                    className="bi bi-person-video3 font4  ct-green-dark bold items"></span>
            </NavLink>
        </>
    )
}

export default Buttons_sidebar