import React, { useEffect, useState } from 'react';
import HeaderTabel from './headerTabel';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';

function Tabel(props) {
    const [openRow, setOpenRow] = useState(null);
    const params = useParams()
    const location = useLocation();
    const [namePack, setNamePack] = useState()

    useEffect(() => {
        setNamePack(location.pathname.split('/')[3])
    }, []);

    const ChangeRow = (index) => {
        setOpenRow((prevOpenRow) => (prevOpenRow === index ? null : index));
    };



    return (

        <div className=" BoxTiels Post mt-2 rounded-3 px-4 unload m-3 mt-3">

            <HeaderTabel pakage={props.pakage} lang={props.lang} namePack={namePack} />

            <div className={`row mt-2 ${props.lang === 'en' ? 'ltr' : 'rtl'}`}>

                <div className="col-12 px-0 mt-1 mx-0 unload position-relative px-2 px-lg-3 ">

                    <div className="row">

                        <div className="table-responsive-lg no-scroll mt-4 p-0 col-12">

                            <table className={`table table-width-mobile `}>


                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col text-center">
                                            <div className="d-flex flex-column align-items-center justify-content-center flex-wrap">
                                                <span className="font1">step 1</span>
                                                <span className="font3"> Start Challenge</span>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="d-flex flex-column align-items-center justify-content-center flex-wrap">
                                                <span className="font1">step 2</span>
                                                <span className="font3"> Assertion </span>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="d-flex flex-column align-items-center justify-content-center flex-wrap">
                                                <span className="font1">step 3</span>
                                                <span className="font3"> UNFXB Trader</span>
                                            </div>
                                        </th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>


                                <tbody className="bg-light body-tabel">



                                    <tr className={`text-center`}>
                                        <th onClick={() => ChangeRow(1)} >  Trading Period</th>
                                        <td onClick={() => ChangeRow(1)} >   30 days</td>
                                        <td onClick={() => ChangeRow(1)} >   30 days</td>
                                        <td onClick={() => ChangeRow(1)} >X</td>
                                        <td onClick={() => ChangeRow(1)} ><span className={`bold font5 bi ${openRow == 1 ? 'bi-dash' : 'bi-plus'}`}></span></td>

                                        <td className='d-flex justify-content-end'>
                                            <Link to={`/karbakhsh/admin-panel/${namePack}/${params.pakage}/edit/fa/1`}
                                                className={`btn  btn-global mx-2 my-1 my-md-0 px-2  font3 centerAll`}>
                                                <span className="bi bi-pen mx-1 ct"></span>
                                                <span className='font1'>ویرایش</span>
                                            </Link>
                                        </td>

                                        <td >
                                            <Link to="/karbakhsh/admin-panel/normal/10/ddd/fa"
                                                className={`btn  btn-global mx-2 my-1 my-md-0 px-2 font3 centerAll`}>
                                                <span className="bi bi-trash mx-1 ct"></span>
                                                <span className='font1'>حذف</span>
                                            </Link>
                                        </td>


                                    </tr>

                                    {openRow === 1 && (
                                        <tr className={`transition`}>
                                            <td colSpan="7" className="p-2">
                                                By default, we do not impose any time constraints on your evaluation. Thi
                                                s means you can take your time for assessments (test phases and live acco
                                                unt). We require a 30-day activity on the account, meaning you must conduc
                                                t a minimum of 6 trades in the first month. Otherwise, your account will be
                                                suspended due to inactivity. So, trade with peace of mind and without risk wit
                                                h Unicorn Forex Broker. Please note that in order to proceed, other terms must n
                                                ot be violated
                                            </td>
                                        </tr>
                                    )}



                                 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabel;
