import React from 'react'
import './Loder.css'
import Alerts from '../Page404/AlertComp/Alert'

function Loader(props) {
  return (
    <div className={`Loader d-flex justify-content-center align-items-center ${props.Isloding}`} >
       <Alerts Error={props.Error} GetPackages={props.GetPackages}/>
    </div>
  )
}

export default Loader