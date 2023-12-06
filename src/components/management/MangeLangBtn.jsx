import { AreaChartOutlined, GlobalOutlined, LineChartOutlined } from '@ant-design/icons'
import { Button, ConfigProvider } from 'antd'
import { showInsetEffect } from '../../Servisers/AntdFunctions';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Wrapper = ({ name, icon, lang,pakage, ...wave }) => {

    const nav = useNavigate()
    const params = useParams()


    const HandelNavigaite = () => {
        if (params.lang == undefined) {
            setTimeout(() => {
                nav(`/karbakhsh/admin-panel/management/${lang}`)
            }, 300)
        } else {
            setTimeout(() => {
                nav(`/karbakhsh/admin-panel/management/${params.lang}/${pakage}`)
            }, 300)
        }
    }

    return (
        <ConfigProvider wave={wave}>
            <Button type="" icon={icon} onClick={() => {
                HandelNavigaite()
            }}>
                {name}
            </Button>
        </ConfigProvider>
    );
}



function MangeLangBtn() {
    const params = useParams()

    return (
        <div className="btn-lang d-flex justify-content-around flex-wrap">
            {
                params.lang == undefined ? (
                    <>
                        <Wrapper name="فارسی" showEffect={showInsetEffect} icon={<GlobalOutlined />} lang='fa' />
                        <Wrapper name="انگلیسی" showEffect={showInsetEffect} icon={<GlobalOutlined />} lang='en' />
                        <Wrapper name="عربی" showEffect={showInsetEffect} icon={<GlobalOutlined />} lang='ar' />
                    </>
                ) : (
                    <>
                        <Wrapper name="نرمال" showEffect={showInsetEffect} icon={<LineChartOutlined />}  pakage='normal'/>
                        <Wrapper name="چالشی" showEffect={showInsetEffect} icon={<AreaChartOutlined />}   pakage='aggresive' />
                    </>
                )
            }

        </div>
    )
}

export default MangeLangBtn