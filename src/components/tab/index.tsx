import { Badge, TabBar } from 'antd-mobile'
import React, { useState, FC } from 'react'
import Ttab from './tab.module.scss'
import { useNavigate,useLocation } from 'react-router-dom'

import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UserOutline,
} from 'antd-mobile-icons'

const DTab: FC = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate();
    const tabs = [
        {
            key: '/',
            title: '首页',
            icon: <AppOutline />,
            badge: Badge.dot,
        },
        {
            key: '/login',
            title: '登录',
            icon: (active: boolean) =>
                active ? <MessageFill /> : <MessageOutline />,
            badge: '99+',
        },
        {
            key: '/user',
            title: '用户',
            icon: <UserOutline />,
        },
    ]

    const tabChange = (select: string) => {
        navigate(`${select}`)
    }

    return <TabBar activeKey={pathname} onChange={(select) => tabChange(select)}>
        {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge}/>
        ))}
    </TabBar>
}

export default DTab