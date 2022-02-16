const Mock = require('mockjs');
const delay = require('mocker-api/lib/delay')

const request = {
    'GET /api/user': {
        id: 1,
        username: "kenny",
        sex: 6
    },
    'GET /api/hi': (req, res) => {
        res.json({
            id: 1,
            username: "jaja"
        })
    },
    'GET /api/mock': Mock.mock({
        name: {
            first: '@FIRST',
            middle: '@FIRST',
            last: '@LAST',
            full: '@first @middle @last'
        },
        'arr|1-5': ["xiaoming", "xiaohong"]
    }),
    'GET /api/catelist': (req, res) => {
        res.json({
            status: 0,
            data: [
                [
                    {
                        to: "/search/meishi/",
                        name: "美食",
                        img: "12337.png"
                    },
                    {
                        to: "/search/dianying/",
                        name: "电影",
                        img: "48113.png"
                    },
                    {
                        to: "/search/jiudian/",
                        name: "酒店",
                        img: "98989.png"
                    },
                    {
                        to: "/search/xuixianyule/",
                        name: "休闲娱乐",
                        img: "06915.png"
                    },
                    {
                        to: "/search/waimai/",
                        name: "外卖",
                        img: "29491.png"
                    },
                    {
                        to: "/search/huoguo/",
                        name: "火锅",
                        img: "93176.png"
                    },
                    {
                        to: "/search/liren/",
                        name: "丽人",
                        img: "26875.png"
                    },
                    {
                        to: "/search/dujiachuxing/",
                        name: "度假出行",
                        img: "13385.png"
                    },
                    {
                        to: "/search/zuliaoanmo/",
                        name: "足疗按摩",
                        img: "20401.png"
                    },
                    {
                        to: "/search/zhoubianyou/",
                        name: "周边游",
                        img: "21773.png"
                    },

                ],
                [
                    {
                        to: "/search/jingdian/",
                        name: "景点",
                        img: "15005.png"
                    },
                    {
                        to: "/search/ktv/",
                        name: "KTV",
                        img: "81081.png"
                    },
                    {
                        to: "/search/gouwu/",
                        name: "购物",
                        img: "62603.png"
                    },
                    {
                        to: "/search/shenghuofuwu/",
                        name: "生活服务",
                        img: "80794.png"
                    },
                    {
                        to: "/search/jianshenyundong/",
                        name: "健身运动",
                        img: "14491.png"
                    },
                    {
                        to: "/search/meifa/",
                        name: "美发",
                        img: "15682.png"
                    },
                    {
                        to: "/search/qinzi/",
                        name: "亲子",
                        img: "01730.png"
                    },
                    {
                        to: "/search/xiaochikuaican/",
                        name: "小吃快餐",
                        img: "00011.png"
                    },
                    {
                        to: "/search/zizhucan/",
                        name: "自助餐",
                        img: "68440.png"
                    },
                    {
                        to: "/search/jiuba/",
                        name: "酒吧",
                        img: "53965.png"
                    },
                ],
                [
                    {
                        to: "/search/ribencai/",
                        name: "日本菜",
                        img: "65687.png"
                    },
                    {
                        to: "/search/spa/",
                        name: "SPA",
                        img: "30810.png"
                    },
                    {
                        to: "/search/jiehun/",
                        name: "结婚",
                        img: "74048.png"
                    },
                    {
                        to: "/search/xuexipeixun/",
                        name: "学习培训",
                        img: "94334.png"
                    },
                    {
                        to: "/search/xican/",
                        name: "西餐",
                        img: "12337.png"
                    },
                    {
                        to: "/search/huochejipiao/",
                        name: "火车机票",
                        img: "76043.png"
                    },
                    {
                        to: "/search/shaokao/",
                        name: "烧烤",
                        img: "37354.png"
                    },
                    {
                        to: "/search/jiazhuang/",
                        name: "家装",
                        img: "15113.png"
                    },
                    {
                        to: "/search/chongwu/",
                        name: "宠物",
                        img: "32725.png"
                    },
                    {
                        to: "/search/all/",
                        name: "全部分类",
                        img: "96364.png"
                    }
                ]
            ]
        })
    },
    'GET /api/homead': (req, res) => {
        res.json({
            status: 0,
            data: [
                {
                    title: '暑假5折',
                    img: '37796.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                },
                {
                    title: '特价出国',
                    img: '29318.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                },
                {
                    title: '亮亮车',
                    img: '72127.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                },
                {
                    title: '学钢琴',
                    img: '59466.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                },
                {
                    title: '电影',
                    img: '29553.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                },
                {
                    title: '旅游热线',
                    img: '02222.png',
                    link: 'http://www.igeekhome.com/lessonlist'
                }
            ]
        })
    },
    'GET /api/homelist/:city/:page': (req, res) => {
        //console.log(req.params.city, req.params.page,"xxxxxxxxx");
        res.json({
            status: 0,
            hasMore: true,
            data: [
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
                    title: '汉堡大大',
                    subTitle: '叫我汉堡大大，还你多彩口味',
                    price: '28',
                    distance: '120m',
                    mumber: '389',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
                    title: '无锡开源饭店',
                    subTitle: '[望京]自助晚餐',
                    price: '98',
                    distance: '140m',
                    mumber: '689',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201652952-1050532278.png',
                    title: '服装定制',
                    subTitle: '原价xx元，现价xx元，可修改一次',
                    price: '1980',
                    distance: '160',
                    mumber: '106',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201700186-1351787273.png',
                    title: '婚纱摄影',
                    subTitle: '免费试穿，拍照留念',
                    price: '2899',
                    distance: '160',
                    mumber: '58',
                    id: Math.random().toString().slice(2)
                },
                {
                    img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201708124-1116595594.png',
                    title: '麻辣串串烧',
                    subTitle: '双人免费套餐等你抢购',
                    price: '0',
                    distance: '160',
                    mumber: '1426',
                    id: Math.random().toString().slice(2)
                }
            ]
        })
    },
    'GET /api/search/:page/:city/:keywords?': (req, res) => {
        const data = [
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145742279-606202974.jpg',
                title: '河束人家',
                subTitle: '南锣鼓巷店',
                price: '150',
                distance: '120m',
                mumber: '389',
                id: Math.random().toString().slice(2)
            },
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145750123-1745839503.jpg',
                title: '漫漫火锅',
                subTitle: '[王府井]自助火锅',
                price: '113',
                distance: '140m',
                mumber: '689',
                id: Math.random().toString().slice(2)
            },
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145755545-1770557408.jpg',
                title: '北方涮肉',
                subTitle: '什刹海店',
                price: '92',
                distance: '160',
                mumber: '106',
                id: Math.random().toString().slice(2)
            },
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145800732-576947550.jpg',
                title: '姓高火锅',
                subTitle: '知春里店',
                price: '90',
                distance: '160',
                mumber: '58',
                id: Math.random().toString().slice(2)
            },
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145806201-1193851669.jpg',
                title: '八重牛府',
                subTitle: '最好吃的牛丸',
                price: '85',
                distance: '160',
                mumber: '1426',
                id: Math.random().toString().slice(2)
            },
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022150855185-1659375763.jpg',
                title: '蜀乡涮锅',
                subTitle: '[王府井]自助火锅',
                price: '113',
                distance: '140m',
                mumber: '689',
                id: Math.random().toString().slice(2)
            },
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022145800732-576947550.jpg',
                title: '满楼福火锅',
                subTitle: '知春路店',
                price: '90',
                distance: '160',
                mumber: '58',
                id: Math.random().toString().slice(2)
            }
        ]
        if (!req.params.keywords) {
            let list = data
            res.json({
                status: 0,
                hasMore: true,
                data: list
            })
        } else {
            let list = data.filter(item => {
                if (item.title.includes(req.params.keywords) || item.subTitle.includes(req.params.keywords)) {
                    return item
                }
            })
            if (list.length === 0) {
                list = data
            }
            res.json({
                status: 0,
                hasMore: true,
                data: list
            })
        }
    },
    'GET /api/detail/info/:id': (req, res) => {
        res.json({
            stats: 0,
            data: {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
                title: '天下第一锅',
                star: 4,
                price: '88',
                subTitle: '重庆 & 四川 麻辣火锅',
                desc: '营业时间 11:00 - 21:00 <br> 电话订购 11:00 - 19:00 <br> 网络订购 11:00 - 19:00'
            }
        })
    },
    'GET /api/detail/comment/:id': (req, res) => {
        res.json({
            status: 0,
            data: [
                {
                    username: '133****3355',
                    comment: '非常好吃，棒棒的，下次再来',
                    star: 5
                },
                {
                    username: '135****3452',
                    comment: '羊肉够分量，不错',
                    star: 4
                },
                {
                    username: '137****1242',
                    comment: '有自助的水果，非常喜欢',
                    star: 4
                },
                {
                    username: '131****3980',
                    comment: '桌子环境有点糟糕，不喜欢',
                    star: 2
                },
                {
                    username: '135****3565',
                    comment: '基本还可以，中规中矩吧，虽然没有啥惊喜',
                    star: 3
                },
                {
                    username: '130****9879',
                    comment: '感觉很棒，服务员态度非常好',
                    star: 5
                },
                {
                    username: '186****7570',
                    comment: '要是能多给开点发票就好了，哈哈啊',
                    star: 4
                }
            ]
        })
    }
}

module.exports = delay(request, 500)