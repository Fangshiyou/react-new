import React, { Component } from 'react';

export default function Login(props){
    function login(){
        props.history.push('/home/all');
    }
        return(
            <div>
                <div className="Top"><span>主页</span> / 登录</div>
                <div className="loginBody">
                    <div className="loginInput">
                        用户名 <input type="text" name="username"/>
                    </div>
                    <div style={{marginLeft:"13px"}} className="loginInput">
                        密码 <input type="pwd" name="pwd"/>
                    </div>
                    <div className="loginBut">
                        <button onClick={login}>登录</button>
                    </div>
                </div>
            </div>
        )
}