import React from 'react'
import { Link, useParams } from 'react-router-dom'

function MangeHaeder(props) {
    const params = useParams()
    return (
        <div className={`font6 pl-2 Fvazir mb-0 d-flex align-items-center  ${params.pakage && params.lang ? 'justify-content-between' : 'justify-content-end '} flex-wrap py-2`} dir="rtl">

            {/* //todo مدیریت پکیج بخش تیتر  */}
            {
                params.pakage && params.lang && (<div className='text-dark'>

                    مدیریت پکیج |

                    <b className="font3 badge bg-dash2 mx-2 text-white-10 my-2">

                        {params.lang == 'en' && 'انگلیسی'}
                        {params.lang == 'fa' && 'فارسی'}
                        {params.lang == 'ar' && 'عربی'}

                    </b>
                    {
                        params.pakage != undefined && <b className="font3 badge bg-dash2 mr-auto">
                            {params.pakage == 'normal' ? 'نرمال' : 'چالشی'}
                        </b>
                    }
                </div>)
            }


            <div className="d-flex justify-content-end w-md-auto my-3 my-md-0 centerAll">
                {/* //! دکمه  افزودن پکیج */}
                {
                    params.pakage && params.lang && (

                        <div className="">
                            {/* دکمه افزودن پکیج */}

                            <Link to={`/karbakhsh/admin-panel/${props.namePack}/${props.pakage}/add/fa`}
                                className="btn  btn-global  px-2 mr-2 font3 d-flex align-items-center">
                                <span className='font1'>افزودن </span>
                                <span className="bi bi-plus mx-1 font4 bold ct"></span>
                            </Link>
                        </div>


                    )
                }
                {/* //! دکمه برگشت به قبل  */}

                <div className="">
                    <Link to={-1}
                        className="btn  btn-global  px-2 mr-2 font3 d-flex align-items-center">
                        <span className='font1'>برگشت </span>
                        <span className="bi bi-box-arrow-left mx-1 font4 bold ct d-block mx-2"></span>
                    </Link>
                </div>
            </div>

                {/*  //? شرط به این شکله وقتی که مشخص شد زبان و نوع پکیج چیه مابقی دکمه ها بجز برگشت نمایش داده میشه  */}
        </div>
    )
}

export default MangeHaeder