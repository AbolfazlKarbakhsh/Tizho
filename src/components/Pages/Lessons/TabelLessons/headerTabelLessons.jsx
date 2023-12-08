import React from 'react'
import { Link } from 'react-router-dom'

function HeaderTabelLessons(props) {

    return (
        <div className="font6 pl-2 Fvazir mb-0 d-flex align-items-center justify-content-between flex-wrap" dir="rtl">
            <div className='text-dark'>لیست دروس  |

                <b className="font3 badge bg-dash2 mx-2 text-white-10 my-2">
                    نمایش اطلاعات
                </b>

            </div>
            <div className="d-flex justify-content-end w-md-auto my-3 my-md-0">

                <Link to={`/karbakhsh/admin-panel/${props.namePack}/${props.pakage}/add/fa`}
                    className="btn  btn-global  px-2 mr-2 font3 d-flex align-items-center">
                    <span className='font1'>افزودن </span>
                    <span className="bi bi-plus mx-1 font4 bold ct"></span>
                </Link>

            </div>
        </div>
    )
}

export default HeaderTabelLessons