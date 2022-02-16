import React, { FC, memo } from 'react'
import { HomeProductPropsType } from '../../../pages/home/type'
import { List, Image, InfiniteScroll, PullToRefresh } from 'antd-mobile'
import styles from './style.module.scss'
import {useNavigate} from 'react-router-dom'

const ProductList: FC<HomeProductPropsType> = (props) => {
    const navigate=useNavigate()
    const loadMore = async () => {
        return props.nextPage();
    }

    return <PullToRefresh
        onRefresh={async () => { props.reload() }}
    ><List>
            {
                props.list.map(item => <List.Item onClick={()=>{navigate(`/detail/${item.id}?title=商品详情`)}} key={item.id} prefix={<Image
                    src={item.img}
                    width={94}
                    height={74}
                    fit='cover'
                    style={{ borderRadius: 4 }}
                />}
                    description={<div>{item.subTitle}<div className={styles.price}>{'￥' + item.price}</div></div>}
                    extra={<div className={styles.extra}>
                        <p>{item.distance}</p>
                        <p>已售{item.mumber}</p>
                    </div>}>
                    {item.title}
                </List.Item>)
            }
            <InfiniteScroll threshold={0} loadMore={loadMore} hasMore={props.hasMore} />
        </List>
    </PullToRefresh>
}

export default memo(ProductList);