import React from 'react';
import './Page404.css'
import { Link } from 'react-router-dom';
const Page404 = () => {
    return (
        <div className='md div'>
            <div className="number div">404</div>
            <div className="text div Fvazir">
                <span className='Fvazir'>متاسفیم...</span><br /><br />
                صفحه مورد نظر یافت نشد!
            </div>
            <Link className="me Fvazir" to={"/AdminPanelV1/users"} target="_self">برگرد به صفحه اصلی</Link>
        </div>
    )
}

export default Page404;

