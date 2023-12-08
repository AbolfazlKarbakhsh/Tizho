import React from 'react'

function Header(props) {
    console.log(props)
    return (
        <>
        <div className='header-aside-lg'>
            <h1 className="h5  px-0 mx-0 w-100 header-aside FSarbaz" style={props.headerColor == '1' ? {color:'#112134'}: {}} > <span className='titr-asiade-header'>تیزهو</span>  مدیریت   </h1>
        </div>
        </>
     

    )
}

export default Header