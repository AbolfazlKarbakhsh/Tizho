import React from 'react'
import { NavLink } from 'react-router-dom'

function BtnHeaderSideBar(props) {
    return (
        <>
            <NavLink to="/karbakhsh/admin-panel/normal/10"
                className={`nav btn  btnRightNav IconSet effect  ${props.OrangeBtn == 'normal' ? 'activeBtn2': 'activeBtn' }`} role="button"
                aria-pressed="false" >
                <span className="font2 items w-75">نرمال</span> <span
                    className="bi bi-graph-up font4 ct bold items"></span>
            </NavLink>

            <NavLink to="/karbakhsh/admin-panel/aggresive/10" className={`nav btn  btnRightNav IconSet effect  ${props.OrangeBtn == 'aggresive' ? 'activeBtn2': 'activeBtn' }`}
                role="button" aria-pressed="false">
                <span className="font2 w-75 items">چالشی </span> <span
                    className="bi bi-graph-up-arrow  font4 ct bold items"></span>
            </NavLink>
        </>
    )
}

export default BtnHeaderSideBar