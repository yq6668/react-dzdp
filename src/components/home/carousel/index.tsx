import React, { FC } from 'react'
import { Swiper } from 'antd-mobile'
import styles from './style.module.scss'
import { HomeCarouselPropsType } from '../../../pages/home/type'
import { useNavigate } from 'react-router-dom'

const Ad: FC<HomeCarouselPropsType> = (props) => {
    //props.list [[{},{}],[{},{}],[{},{}]]
    //item  [{},{}]
    //index 数组下表
    //cate  {to: "/search/meishi/",name: "美食",img: "12337.png"},
    const navigate = useNavigate()
    const items = props.list.map((item, index) => (
        <Swiper.Item key={index}>
            <ul className={styles.content}>
                {
                    item.map((cate) => {
                        return <li className={styles.cateitem} key={cate.to} onClick={() => { navigate(cate.to) }}>
                            <img className={styles.icon} src={require(`../../../static/images/${cate.img}`)} alt="" />
                            <p>{cate.name}</p>
                        </li>
                    })
                }
            </ul>
        </Swiper.Item>
    ))
    return <Swiper loop>{items}</Swiper>
}

export default Ad;