import { NavBar, SearchBar } from 'antd-mobile'
import Nnav from './nav.module.scss'
import { DownOutline, UserOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import context from '../../redux/context'

export default function DNav() {
    const navigate = useNavigate();
    const [city, dispatch] = useContext(context)
    return <NavBar className={Nnav.nav}
        left={<div onClick={() => navigate('/city?title=切换城市')}>{city}<DownOutline /></div>}
        right={<UserOutline onClick={() => navigate("/user")}></UserOutline>}
        backArrow={false}>
        <div>祥祥心理FM</div>
    </NavBar>
}