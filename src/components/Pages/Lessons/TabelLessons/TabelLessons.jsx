import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import HeaderTabelLessons from './headerTabelLessons';

function TabelLessons(props) {
    const params = useParams()

    return (

        <div className=" BoxTiels Post mt-2 rounded-3 px-4 unload m-3 mt-3">

            <HeaderTabelLessons />

            <div className={`row mt-2 rtl`}>

                <div className="col-12 px-0 mt-1 mx-0 unload position-relative px-2 px-lg-3 ">

                    <div className="row">

                        <div className="table-responsive-lg no-scroll mt-4 p-0 col-12">

                            <table className={`table table-width-mobile `}>


                                <thead className="thead-dark text-center">
                                    <tr>
                                        <th>#</th>
                                        <th>عنوان</th>
                                        <th>پایه و رشته</th>
                                        <th>برنامه راهبردی  </th>
                                        <th>عملیات   </th>
                                    </tr>
                                </thead>


                                <tbody className="bg-light body-tabel">

                                    <tr className='text-center'>
                                        <td> 1</td>
                                        <td> ریاضی  </td>
                                        <td> یازدهم تجربی </td>
                                        <td> * </td>
                                        <td>
                                            <Link to={`/`}
                                                className={`btn  btn-global mx-2 my-1 my-md-0 px-2  font3 centerAll`}>
                                                <span className="bi bi-pen mx-1 ct"></span>
                                                <span className='mx-1'></span>
                                                <span className='font1'>ویرایش</span>
                                            </Link>

                                            <Link to="/"
                                                className={`btn  btn-global mx-2 my-1 my-md-0 px-2 font3 centerAll`}>
                                                <span className="bi bi-trash mx-1 ct"></span>
                                                <span className='font1'>حذف</span>
                                            </Link>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TabelLessons;
