import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Hr from '../Global/Hr'

function CU_Main() {
    const params = useParams()
    const navagate = useNavigate()
    const location = useLocation();
    const [namePack , setNamePack] = useState()

    useEffect(() => {
        setNamePack(location.pathname.split('/')[3])
        params.EditRow >5 && navagate('/')
    }, []);
    return (
        <>
            <div className=" BoxTiels bg-sormei rounded-3 px-4 unload">

                {/* <!-- header in user panel  --> */}
                <div className=" d-flex-beatwean align-items-center align-content-center p-0 m-0">
                    <div className="IconSet pointer effect pt-0">

                        <span className="bi-box-arrow-left font7 bold items" onClick={() => {
                            navagate(`/karbakhsh/admin-panel/${namePack}/${params.pakage}`)
                        }} ></span>

                    </div>
                    <h3 className="font6 p-0 m-0 Fvazir mb-0">
                        {params.state == 'add' ? 'افزودن سطر جدید' : 'ویرایش سطر'}
                    </h3>
                </div>
                <hr />
                {/* <!-- searching in user panel  --> */}
                <div className="row pt-3 d-flex align-items-center  justify-content-between" dir='rtl'>

                    <div className='col-12 col-lg-6 mb-2 px-3'>
                        <div className='row'>
                            <label className=' my-2 p-0 pt-lg-2 mt-1 mt-lg-0 '>نام فیلد   :  </label>

                            <div className="form-group  p-0">
                                <input type="text"
                                    className="form-control shadow" dir={params.lang == 'en' ? 'ltr' : 'rtl'} />
                            </div>
                        </div>
                    </div>


                    <div className='col-12 col-lg-6 mb-2 px-3'>
                        <div className='row'>
                            <label className=' my-2 p-0 pt-lg-2 mt-1 mt-lg-0 ' >جایگاه فیلد   :  </label>

                            <div className="form-group  p-0">
                                <select name="" id=""
                                    className="form-select pull-righ px-5"  >
                                    <option value="انتخاب کنید" className='d-none'  selected={params.EditRow == null ? 'true' : 'false'} >انتخاب کنید</option>
                                    <option value="اول"   selected= {params.EditRow  == 1 ? true : false} >اول</option>
                                    <option value="دوم"   selected= {params.EditRow  == 2 ? true : false} >دوم</option>
                                    <option value="سوم"   selected= {params.EditRow == 3 ? true : false} >سوم</option>
                                    <option value="چهارم" selected= {params.EditRow == 4 ?true : false}  >چهارم</option>
                                    <option value="پنجم" selected= {params.EditRow == 5 ? true : false}  >پنجم</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <Hr />

                    <div className='col-12 col-md-6 mb-2 px-3'>
                        <div className='row'>
                            <label className=' my-2 p-0 pt-lg-2 mt-1 mt-lg-0 '>مرحله اول    :  </label>

                            <div className="form-group  p-0">
                                <input type="text"
                                    className="form-control shadow" dir={params.lang == 'en' ? 'ltr' : 'rtl'} />
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 mb-2 px-3'>
                        <div className='row'>
                            <label className=' my-2 p-0 pt-lg-2 mt-1 mt-lg-0 '>مرحله دوم    :  </label>

                            <div className="form-group  p-0">
                                <input type="text"
                                    className="form-control shadow" dir={params.lang == 'en' ? 'ltr' : 'rtl'} />
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 mb-2 px-3'>
                        <div className='row'>
                            <label className=' my-2 p-0 pt-lg-2 mt-1 mt-lg-0 '>مرحله سوم    :  </label>

                            <div className="form-group  p-0">
                                <input type="text"
                                    className="form-control shadow" dir={params.lang == 'en' ? 'ltr' : 'rtl'} />
                            </div>
                        </div>
                    </div>

                    <Hr />

                    <div className='col-12  mb-2 px-3'>
                        <div className='row'>
                            <label className=' my-2 p-0 pt-lg-2 mt-1 mt-lg-0 '>توضیحات     :  </label>

                            <div className="form-group  p-0" spellCheck={false}>
                                <textarea name="" id="" cols="25" rows="7" className="form-control shadow" dir={params.lang == 'en' ? 'ltr' : 'rtl'} ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className='col-12  mb-3 d-flex  justify-content-end '>
                        <button className='btn activeBtn px-3 py-2 font2'>
                            {params.state == "edit" ? 'ویرایش' : 'افزودن سطر '}
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CU_Main