import React, { useContext } from 'react'
import context from '../../redux/context'
import { useNavigate } from 'react-router-dom'
import './style.scss'

function City() {
    const [city, dispatch] = useContext(context)
    const navigate = useNavigate();

    const clickHandle = (current: string) => {
        //dispatch用来接受一个action，他可以把action的变化转换为state的变化(内部会去触发reducer)
        dispatch({
            type: "CHANGE",
            city: current
        })
        navigate(-1)
    }

    return (
        <div>
            <div className="current-city">
                <h2>{city}</h2>
            </div>
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("北京");
                            }}
                        >
                            北京
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("上海");
                            }}
                        >
                            上海
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("杭州");
                            }}
                        >
                            杭州
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("广州");
                            }}
                        >
                            广州
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("无锡");
                            }}
                        >
                            无锡
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("深圳");
                            }}
                        >
                            深圳
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("南京");
                            }}
                        >
                            南京
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("天津");
                            }}
                        >
                            天津
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("重庆");
                            }}
                        >
                            重庆
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("厦门");
                            }}
                        >
                            厦门
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("武汉");
                            }}
                        >
                            武汉
                        </span>
                    </li>
                    <li>
                        <span
                            onClick={() => {
                                clickHandle("西安");
                            }}
                        >
                            西安
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default City;