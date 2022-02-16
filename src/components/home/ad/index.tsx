import React, { FC } from 'react'
import { HomeAdPropsType } from '../../../pages/home/type'
import styles from './style.module.scss'

const Ad: FC<HomeAdPropsType> = (props) => {
    return <div className={styles.homead}>
        <h2>超值特惠</h2>
        {/* ad-container clear-fix */}
        <div className={[styles.container, 'clear-fix'].join(" ")}>
            {props.list.map((item, index) => {
                return (
                    // "ad-item float-left"
                    <div key={index} className={[styles.item, 'float-left'].join(" ")}>
                        <a href={item.link} target="_blank">
                            <img src={require(`../../../static/images/${item.img}`)} alt={item.title} />
                        </a>
                    </div>
                );
            })}
        </div>
    </div>
}

export default Ad;