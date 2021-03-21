import React from 'react'
import { Input, Select } from 'antd'
import 'antd/dist/antd.css'
import style from "./AntdComponents.module.css"
export const AntdComponents = () => {
    return (
        <>
            <Input />
            <Select className={style['width-250-px']} />
        </>
    )
}
