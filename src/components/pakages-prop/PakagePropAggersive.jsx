import React, { useEffect } from 'react'
import Tabel from './tabel/Tabel'
import { useParams } from 'react-router-dom'


function PakagePropNormal() {

  const params = useParams()


  return (
    <>
      <div className=" mio unload">
        <Tabel pakage={params.pakage} lang="en" />
        <Tabel pakage={params.pakage} lang="fa" />
        <Tabel pakage={params.pakage} lang="ar" />
      </div>
    </>
  )
}

export default PakagePropNormal