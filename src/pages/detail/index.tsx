import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchget } from '../../utils/http'

type Detail = {
    img?: string,
    title?: string,
    star?: number,
    price?: string,
    subTitle?: string,
    dec?: string
}

type list = {
    username: string,
    comment: string,
    star: number
}
function Detail() {
    const param = useParams()
    const [prodetail, setdata] = useState<Detail>({})
    const [prolist, setlist] = useState<list[]>([])
    const getDetail = async () => {
        let { data } = await fetchget(`/api/detail/info/${param.id}`)
        setdata(data)
    }
    const getList = async () => {
        let { data } = await fetchget(`/api/detail/comment/${param.id}`)
        setlist(data)
    }
    useEffect(() => {
        getDetail()
        getList()
    }, [])
    return (
        <div>
            <div>
                <img src={prodetail.img} />
            </div>
            <ul>
                {prolist.length != 0 ? (prolist.map(item => <li style={{fontSize:'14px'}} key={item.username}>{item.username}-{item.comment}-{item.star}</li>)) : ''}
            </ul>
        </div>
    );
}

export default Detail;