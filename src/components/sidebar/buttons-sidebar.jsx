import React from 'react'
import { NavLink } from 'react-router-dom'

function Buttons_sidebar(props) {
    return (
        <>
            {/* //? normal btns  */}
            {
                props.OrangeBtn == 'normal' && (
                    <>
                        {
                            props.pakages.normal != undefined && (props.pakages.normal.map((item) => {
                                return (
                                    <NavLink key={Math.random() * 10000} to={`/karbakhsh/admin-panel/normal/${item.price}`}
                                        className={`nav btn  btnRightNav IconSet   ${props.BlueBtn == item.price ? 'activeBtn3' : 'activeBtn'}`} role="button"
                                        aria-pressed="false" onClick={props.p}>
                                        <span className="font2 items w-75">{item.sort_price}</span> <span
                                            className="bi bi-currency-dollar font4  ct bold items"></span>
                                    </NavLink>
                                )
                            }))

                        }
                    </>
                )
            }
            {/* //? aggressive btns  */}
            {
                props.OrangeBtn == 'aggresive' && (
                    <>
                        {
                            props.pakages.aggressive != undefined && (props.pakages.aggressive.map((item) => {
                                return (
                                    <NavLink key={Math.random() * 10000} to={`/karbakhsh/admin-panel/aggresive/${item.price}`}
                                        className={`nav btn  btnRightNav IconSet  ${props.BlueBtn == item.price ? 'activeBtn3' : 'activeBtn'}`} role="button"
                                        aria-pressed="false" onClick={props.p}>
                                        <span className="font2 items w-75">{item.sort_price}</span> <span
                                            className="bi bi-currency-dollar font4  ct bold items"></span>
                                    </NavLink>
                                )
                            }))

                        }
                    </>
                )
            }
        </>
    )
}

export default Buttons_sidebar