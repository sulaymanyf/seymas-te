import React, {Component, Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../assets/bootstrap/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import '../../../assets/css/seyma.css'
import logo from '../../../assets/images/logo.svg';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';
import Music from "../Music";


class Header extends Component{

    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
       // const newList = list.toJS();
        const pageList = [];

        // if (newList.length) {
        //     for (let i = (page - 1) * 10; i < page * 10; i++) {
        //         pageList.push(
        //             <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        //         )
        //     }
        // }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
    render(){
        const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;
        return(
            <Fragment>
                <header id="header" className="app-header navbar" role="menu">
                    <div className="text-ellipsis navbar-header bg-black">
                        <button className="pull-right visible-xs dk"
                                ui-toggle-class="show animated animated-lento fadeIn" target=".navbar-collapse">
                            <i className="fontello fontello-gear text-lg"></i>
                        </button>
                        <button className="pull-left visible-xs" ui-toggle-class="off-screen animated"
                                target=".app-aside" ui-scroll="app">
                            <i className="fontello fontello-menu text-lg"></i>
                        </button>
                        <a href="https://www.ihewro.com/" className="navbar-brand text-lt">
                            <img src={logo} className="App-logo" alt="logo" />
                        </a>
                    </div>
                    <div className="collapse pos-rlt navbar-collapse box-shadow bg-black">
                        {/*<form id="searchform1" className="searchform navbar-form navbar-form-sm navbar-left shift"*/}
                              {/*method="post" role="search">*/}
                            {/*<div className="form-group">*/}
                                {/*<div className="input-group rounded bg-light">*/}
                                    {/*<input autoComplete="off" id="search_input" type="search" name="s"*/}
                                           {/*className="transparent rounded form-control input-sm no-border padder"*/}
                                           {/*required="" placeholder="输入关键词搜索…"/>*/}
                                        {/*<ul id="search_tips_drop" className="dropdown-menu hide"*/}
                                            {/*style={{display: 'block',top: 30, left: 0 }}>*/}
                                        {/*</ul>*/}
                                        {/*<span id="search_submit" className="transparent input-group-btn">*/}
{/*<button type="submit" className="transparent btn btn-sm"><i className="fontello fontello-search" id="icon-search"></i><i*/}
    {/*className="animate-spin  fontello fontello-spinner hide" id="spin-search"></i></button>*/}
{/*</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</form>*/}
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                    className={focused ? 'focused': ''}
                                    onFocus={() => handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
                                &#xe614;
                            </i>
                            {this.getListArea()}
                        </SearchWrapper>
                        <a href="" style={{display: 'none'}} id="searchUrl"></a>
                        <ul className="nav navbar-nav navbar-right">
                            {/*<li className="music-box hidden-xs hidden-sm">*/}
                                {/*<div id="skPlayer">*/}
                                    {/*<audio className="skPlayer-source"*/}
                                           {/*src="https://s320.xiami.net/177/2177/11923/146884_15922819_h.mp3?ccode=xiami_mac_&amp;expire=86400&amp;duration=260&amp;psid=9af70194d920982986dc47710241f422&amp;ups_client_netip=123.206.64.104&amp;ups_ts=1556176622&amp;ups_userid=0&amp;utid=&amp;vid=146884&amp;fn=146884_15922819_h.mp3&amp;vkey=Bdc0ba5677329d39354154633009ce365"*/}
                                           {/*preload="auto" __idm_id__="232334337"></audio>*/}
                                    {/*<div className="skPlayer-picture">*/}
                                        {/*<img className="skPlayer-cover"*/}
                                             {/*src="https://pic.xiami.net/images/album/img51/102/5885a16d30432_5129451_1485152621.jpg@1e_1c_100Q_300h_300w"*/}
                                             {/*alt=""/>*/}

                                    {/*</div>*/}
                                    {/*<div className="skPlayer-control">*/}
                                        {/*<p className="skPlayer-name">但愿人长久</p>*/}
                                        {/*<div className="playController">*/}
                                            {/*<div onClick="player.prev();" className="lastMusic  music-off "><i*/}
                                                {/*className="fontello fontello-angle-double-left"></i></div>*/}
                                            {/*&nbsp;&nbsp;*/}
                                            {/*<div className="runMusic  music-off skPlayer-play-btn"><i*/}
                                                {/*className="fontello fontello-play-circle-o runMusicIcon"></i></div>*/}
                                            {/*&nbsp;&nbsp;*/}
                                            {/*<div onClick="player.next();" className="nextMusic  music-off "><i*/}
                                                {/*className="fontello fontello-angle-double-right"></i></div>*/}
                                        {/*</div>*/}
                                        {/*<p className="skPlayer-author">王菲</p>*/}
                                        {/*<div className="skPlayer-percent">*/}
                                            {/*<div className="skPlayer-line-loading" style={{width: 31.41}}></div>*/}
                                            {/*<div className="skPlayer-line lter"></div>*/}
                                        {/*</div>*/}
                                        {/*<p className="skPlayer-time">*/}
                                            {/*<span className="skPlayer-cur">00:00</span>/<span*/}
                                            {/*className="skPlayer-total">04:20</span>*/}
                                        {/*</p>*/}
                                        {/*<div className="skPlayer-volume">*/}
                                            {/*<i className="skPlayer-icon glyphicon glyphicon-volume-up"></i>*/}
                                            {/*<div className="skPlayer-percent">*/}
                                                {/*<div className="skPlayer-line"></div>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                        {/*<i className="skPlayer-mode"></i>*/}
                                    {/*</div>*/}
                                    {/*<ul className="skPlayer-list animated flipInX">*/}

                                        {/*<li data-index="0" className="skPlayer-curMusic">*/}
                                            {/*<i className="skPlayer-list-sign"></i>*/}
                                            {/*<span className="skPlayer-list-index">1</span>*/}
                                            {/*<span className="skPlayer-list-name" title="但愿人长久">但愿人长久</span>*/}
                                            {/*<span className="skPlayer-list-author" title="王菲">王菲</span>*/}
                                        {/*</li>*/}

                                    {/*</ul>*/}
                                {/*</div>*/}
                            {/*</li>*/}
                            <Music/>
                            <li className="dropdown "><a className="skPlayer-list-switch dropdown-toggle"><i
                                className="fontello fontello-headphones"></i><span className="visible-xs-inline"></span></a>
                            </li>
                            <li className="dropdown">
                                <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                                    <i className="fontello fontello-bell icon-fw"></i>
                                    <span className="visible-xs-inline">
闲言碎语 </span>
                                    <span className="badge badge-sm up bg-danger pull-right-xs"></span>
                                </a>
                                <div className="dropdown-menu w-xl animated fadeInUp">
                                    <div className="panel bg-white">
                                        <div className="panel-heading b-light bg-light">
                                            <strong>
                                                闲言碎语 </strong>
                                        </div>
                                        <div className="list-group" id="smallRecording">
                                            <a href="https://www.ihewro.com/cross.html"
                                               className="list-group-item"><span
                                                className="clear block m-b-none words_contents">今天下了雨，天气一下子变得像冬天一样，明明前几天天气热的和热夏一下。一些事情让我的心情一下子什么也不想干了。下雨的时候没带伞，外面飞奔着回宿舍，凉飕飕的风让我只想躲在被窝里。“天气变冷了，冬天那么寒冷，是为了让我们都懂的周围人的温暖有多么重要。”有一瞬间让我只想抱着喜欢的人冬眠。哈哈哈哈<small
                                                className="text-muted">2019-4-24 23:08:29</small></span></a><a
                                            href="https://www.ihewro.com/cross.html" className="list-group-item"><span
                                            className="clear block m-b-none words_contents">新浪图床似乎是真的不能用了哎😔<small
                                            className="text-muted">2019-4-24 18:06:40</small></span></a><a
                                            href="https://www.ihewro.com/cross.html" className="list-group-item"><span
                                            className="clear block m-b-none words_contents">一直用Tim，晚上打开QQ，什么鬼，怎么这么卡..而且界面变化的好大，和新版京东app的风格有点像。话说为什么微信有的时候字体变的超大，我的手机分辨率调的是最大的，系统字体也是最小的，真的奇怪<small
                                            className="text-muted">2019-4-23 19:22:10</small></span></a></div>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown" id="easyLogin">
                                <a onClick="return false" data-toggle="dropdown" className="dropdown-toggle clear">
                                    <span className="text">登录</span>
                                    <b className="caret"></b>
                                </a>
                                <div className="dropdown-menu w-lg wrapper bg-white animated shake"
                                     aria-labelledby="navbar-login-dropdown">
                                    <form id="Login_form"
                                          action="https://www.ihewro.com/index.php/action/login?_=14a288339ad09b0756bf9b95bec5bf59"
                                          method="post">
                                        <div className="form-group">
                                            <label htmlFor="navbar-login-user">用户名</label>
                                            <input type="text" name="name" id="navbar-login-user"
                                                   className="form-control" placeholder="用户名或电子邮箱"/></div>
                                        <div className="form-group">
                                            <label htmlFor="navbar-login-password">密码</label>
                                            <input type="password" name="password" id="navbar-login-password"
                                                   className="form-control" placeholder="密码"/></div>
                                        <button type="submit" id="login-submit" name="submitLogin"
                                                className="btn btn-block btn-primary">
                                            <span className="text">登录</span>
                                            <span className="text-active">登录中...</span>
                                            <span className="banLogin_text">刷新页面后登录</span>
                                            <i className="animate-spin  fontello fontello-spinner hide"
                                               id="spin-login"></i>
                                            <i className="animate-spin fontello fontello-refresh hide"
                                               id="ban-login"></i>
                                        </button>
                                        <input type="hidden" name="referer" value="https://www.ihewro.com"
                                               data-current-url="value"/></form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </header>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        // handleInputFocus(list) {
        //     (list.size === 0) && dispatch(actionCreators.getList());
        //     dispatch(actionCreators.searchFocus());
        // },
        // handleInputBlur() {
        //     dispatch(actionCreators.searchBlur());
        // },
        // handleMouseEnter() {
        //     dispatch(actionCreators.mouseEnter());
        // },
        // handleMouseLeave() {
        //     dispatch(actionCreators.mouseLeave());
        // },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

        //     if (page < totalPage) {
        //         dispatch(actionCreators.changePage(page + 1));
        //     }else {
        //         dispatch(actionCreators.changePage(1));
        //     }
        // },
        // logout() {
        //     dispatch(loginActionCreators.logout())
        }
    }
};
    export default Header
