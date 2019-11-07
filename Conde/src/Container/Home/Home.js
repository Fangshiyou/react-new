import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import All from './All'
import Jinghua from './Jinghua'
import Fenxiang from './Fenxiang'
import Wenda from './Wenda'
import Zhaopin from './Zhaopin'
import Ceshi from './Ceshi'


export default class Home extends Component{
    render(){
        let {url}=this.props.match;
        return(
            <div>
                <div className="homeHeader">
                    <Link className="homeLink" to={`${url}/all`}>全部</Link>
                    <Link className="homeLink" to={`${url}/jinghua`}>精华</Link>
                    <Link className="homeLink" to={`${url}/fenxiang`}>分享</Link>
                    <Link className="homeLink" to={`${url}/wenda`}>问答</Link>
                    <Link className="homeLink" to={`${url}/zhaopin`}>招聘</Link>
                    <Link className="homeLink" to={`${url}/ceshi`}>客户端测试</Link>
                </div>
                <div>
                    <Route path={url+'/all'} component={All}/>
                    <Route path={url+'/jinghua'} component={Jinghua}/>
                    <Route path={url+'/fenxiang'} component={Fenxiang}/>
                    <Route path={url+'/wenda'} component={Wenda}/>
                    <Route path={url+'/zhaopin'} component={Zhaopin}/>
                    <Route path={url+'/ceshi'} component={Ceshi}/>
                </div>
            </div>
        )
    }
}