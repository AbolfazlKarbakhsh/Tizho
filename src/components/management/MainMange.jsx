import React from 'react'
import { useParams } from 'react-router-dom';
import MangeLangBtn from './MangeLangBtn';
import MangeHaeder from './ManageHeader';
import ManagePakage from './ManagePakageBoxIcon';




const MainManage = () => {

    const params = useParams()

    return (
        <div className="BoxTiles Post mt-2 rounded-3 px-4 unload m-3 mt-3 py-3 ">
            <MangeHaeder />
            {params.pakage == undefined && <MangeLangBtn />}
            {
                params.pakage != undefined && (
                    <>
                        <div className="d-flex flex-wrap justify-content-around mt-3">
                            
                        </div>
                    </>
                )
            }

        </div>
    )
};

export default MainManage;