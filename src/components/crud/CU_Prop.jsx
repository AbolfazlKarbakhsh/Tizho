import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CU_Main from './CU_Main'

function CU_Prop() {

    const param = useParams()
    const navgate = useNavigate()

    useEffect(() => {
        if (param.state != 'add' && param.state != 'edit') {
            navgate(`/karbakhsh/admin-panel/normal/${param.pakage}`)
        }
    }, [param])

    return (
        <>
            {param.state == 'add'  &&    <CU_Main parmas={param} />}
            {param.state == 'edit' &&    <CU_Main parmas={param} />}
        </>
    )

}

export default CU_Prop