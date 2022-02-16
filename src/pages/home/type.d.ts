//首页轮播图相关的类型
export type HomeCarouselItemType = {
    to: string,
    name: string,
    img: string
}
export type HomeCarouselListType = HomeCarouselItemType[][]
export type HomeCarouselPropsType = {
    list: HomeCarouselListType
}

//首页广告相关类型
export type HomeAdItemType = {
    title: string,
    img: string,
    link: string
}
export type HomeAdListType = HomeAdItemType[]
export type HomeAdPropsType = {
    list: HomeAdListType
}


//首页列表相关类型
export type HomeProductItemType = {
    img: string,
    title: string,
    subTitle: string,
    price: string,
    distance: string,
    mumber: string,
    id: string
}
export type HomeProductListType = HomeProductItemType[]
export type HomeProductPropsType = {
    list: HomeProductListType,
    hasMore: boolean,
    nextPage(): void,
    reload(): void
}