import React, {Component, Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
// import { actionCreators as loginActionCreators } from '../../pages/login/store'
import {Styled} from "../../../assets/iconfont/iconfont";
import logo from '../../../assets/images/logo.svg';
import {
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
} from './style';
import Login from "../Login";



class Header extends Component{
    getListArea() {
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						Hot
						<SearchInfoSwitch
							onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
							Başkalar
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
        const { focused, handleInputFocus, handleInputBlur, list } = this.props;
        // console.log("const   "+list)
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
                            {/*<li className="dropdown "><a className="skPlayer-list-switch dropdown-toggle"><i*/}
                                {/*className="fontello fontello-headphones"></i><span className="visible-xs-inline"></span></a>*/}
                            {/*</li>*/}
                            {/*<li className="dropdown">*/}
                                {/*<a href="#" data-toggle="dropdown" className="dropdown-toggle">*/}
                                    {/*<i className="fontello fontello-bell icon-fw"></i>*/}
                                    {/*<span className="visible-xs-inline">*/}
                                        {/*闲言碎语 </span>*/}
                                    {/*<span className="badge badge-sm up bg-danger pull-right-xs"></span>*/}
                                {/*</a>*/}
                                {/*<div className="dropdown-menu w-xl animated fadeInUp">*/}
                                    {/*<div className="panel bg-white">*/}
                                        {/*<div className="panel-heading b-light bg-light">*/}
                                            {/*<strong>*/}
                                                {/*闲言碎语 </strong>*/}
                                        {/*</div>*/}
                                        {/*<div className="list-group" id="smallRecording">*/}
                                            {/*<a href="https://www.ihewro.com/cross.html"*/}
                                               {/*className="list-group-item"><span*/}
                                                {/*className="clear block m-b-none words_contents">今天下了雨，天气一下子变得像冬天一样，明明前几天天气热的和热夏一下。一些事情让我的心情一下子什么也不想干了。下雨的时候没带伞，外面飞奔着回宿舍，凉飕飕的风让我只想躲在被窝里。“天气变冷了，冬天那么寒冷，是为了让我们都懂的周围人的温暖有多么重要。”有一瞬间让我只想抱着喜欢的人冬眠。哈哈哈哈<small*/}
                                                {/*className="text-muted">2019-4-24 23:08:29</small></span></a><a*/}
                                            {/*href="https://www.ihewro.com/cross.html" className="list-group-item"><span*/}
                                            {/*className="clear block m-b-none words_contents">新浪图床似乎是真的不能用了哎😔<small*/}
                                            {/*className="text-muted">2019-4-24 18:06:40</small></span></a><a*/}
                                            {/*href="https://www.ihewro.com/cross.html" className="list-group-item"><span*/}
                                            {/*className="clear block m-b-none words_contents">一直用Tim，晚上打开QQ，什么鬼，怎么这么卡..而且界面变化的好大，和新版京东app的风格有点像。话说为什么微信有的时候字体变的超大，我的手机分辨率调的是最大的，系统字体也是最小的，真的奇怪<small*/}
                                            {/*className="text-muted">2019-4-23 19:22:10</small></span></a></div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</li>*/}
                            <li className="dropdown">
                                <a href="#" data-toggle="dropdown" className="dropdown-toggle" aria-expanded="false">
                                    <i className="fontello fontello-bell icon-fw"></i>
                                    <span className="visible-xs-inline">
闲言碎语 </span>
                                    <span className="badge badge-sm up bg-danger pull-right-xs">新</span>
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
                                                className="clear block m-b-none words_contents">额头上张满了红色小包，是青春痘吗。。。青春期从没有长痘，现在是第二春嘛，烦恼<br/><small
                                                className="text-muted">2019-5-1 00:06:23</small></span></a><a
                                            href="https://www.ihewro.com/cross.html" className="list-group-item"><span
                                            className="clear block m-b-none words_contents">该评论仅登录用户及评论双方可见<br/><small
                                            className="text-muted">2019-4-30 13:35:27</small></span></a><a
                                            href="https://www.ihewro.com/cross.html" className="list-group-item"><span
                                            className="clear block m-b-none words_contents">该评论仅登录用户及评论双方可见<br/><small
                                            className="text-muted">2019-4-30 13:29:22</small></span></a></div>
                                    </div>
                                </div>
                            </li>
                            <Login/>
                        </ul>
                    </div>
                </header>
                 <Styled/>
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
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            }else {
        // logout() {
        //     dispatch(loginActionCreators.logout())
                dispatch(actionCreators.changePage(1));
            }
        },
        // }
    }
};
    export default  connect(mapStateToProps, mapDispathToProps)(Header);
