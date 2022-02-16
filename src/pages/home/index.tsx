import React, { useEffect, useState,useContext } from 'react'
import { fetchget } from '../../utils/http'
import Ad from '../../components/home/ad'
import Carousel from '../../components/home/carousel'
import ProductList from '../../components/home/product/list'
import { HomeCarouselListType, HomeAdListType,HomeProductListType  } from './type'
import { Loading } from 'antd-mobile'
import context from '../../redux/context'



//在react中编程的时候，会去区分智能组件(逻辑 发送请求)、木偶组件(只负责显示)
function Home() {
    const [city, dispatch] = useContext(context)

    const [lunbolist, setLunbolist] = useState<HomeCarouselListType>([])
    const [adlist, setAdlist] = useState<HomeAdListType>([])

    let [productList, setProductList] = useState<HomeProductListType>([])
    let [pageIndex, setPageIndex] = useState(1);
    let [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        getCates();
        getAds();
        getProducts();
    }, [])

    const getCates = async () => {
        let { data } = await fetchget("/api/catelist")
        setLunbolist(data);
    }

    const getAds = async () => {
        let { data } = await fetchget("/api/homead")
        setAdlist(data);
    }

    const getProducts = async () => {
        let { data } = await fetchget(`/api/homelist/${city}/${pageIndex}`)
        setProductList([...productList, ...data]);
    }

    //加载下一页数据
    const getNextPage = async () => {
        setPageIndex(pageIndex + 1)
        pageIndex += 1;
        return getProducts();
    }

    //下拉刷新
    const reloadProductList = () => {
        setProductList([])
        setPageIndex(1);
        productList = [];
        pageIndex = 1;
        getProducts();
    }

    return (
        <div>
            <Carousel list={lunbolist}></Carousel>
            {adlist.length ? <Ad list={adlist}></Ad> : <Loading />}
            <ProductList reload={reloadProductList} nextPage={getNextPage} list={productList} hasMore={hasMore}></ProductList>
        </div>
    );
}

export default Home;