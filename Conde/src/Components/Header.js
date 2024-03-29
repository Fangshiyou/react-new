import React from 'react';
import {Link} from 'react-router-dom'

export default function Header(){
    return <div className='header'>
        <header>
            <img src="http://static.nodejs.cn/_static/img/logo.svg"/>
            <input type="text"/>
            <div style={{float:"right"}}>
                <Link to="/home">首页</Link>
                <Link to="/start">新手入门</Link>
                <Link to="/api">API</Link>
                <Link to="/about">关于</Link>
                <Link to="/haha">注册</Link>
                <Link to="/login">登录</Link>

            </div>
        </header>
    </div>
}