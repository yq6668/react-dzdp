import React, { FC, useState,useContext } from 'react'
import { fetchget } from '../../utils/http'
import { useParams } from 'react-router-dom'
import ProductList from '../../components/home/product/list'
import { HomeProductListType } from '../home/type'
import context from '../../redux/context'

const Search: FC = () => {
    const params = useParams()

    const [city, dispatch] = useContext(context)

    let [productList, setProductList] = useState<HomeProductListType>([])
    let [pageIndex, setPageIndex] = useState(1);
    let [hasMore, setHasMore] = useState(true)

    const getProducts = async () => {
        let { data } = await fetchget(`/api/search/${pageIndex}/${city}/${params.msg}`)
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
            <ProductList reload={reloadProductList} nextPage={getNextPage} list={productList} hasMore={hasMore}></ProductList>
        </div>
    );
}

export default Search;