import React, {Component, Fragment} from 'react';
import '../../../assets/bootstrap/css/bootstrap.min.css'
import '../../../assets/css/seyma.css'
import FootMen from "../FootMuen";
import NavBar from "../Nav";

class Asider extends Component {
    render() {
        return (
            <Fragment>
                <aside id="aside" className="app-aside hidden-xs bg-white b-r">
                    <div className="aside-wrap" layout="column">
                        <div className="navi-wrap scroll-y" flex="">
                            <div className="clearfix hidden-xs text-center hide  show" id="aside-user">

                                <div className="dropdown wrapper">
                                    <div ui-nav="">
                                        <a href="https://www.ihewro.com/cross.html">
                                            <span className="thumb-lg w-auto-folded avatar m-t-sm">
                                            <img src="https://www.ihewro.com/usr/uploads/2017/11/414908425.jpeg" className="img-full"/>
                                            </span>
                                        </a>
                                    </div>
                                    <a href="#" data-toggle="dropdown" className="dropdown-toggle hidden-folded">
                                        <span className="clear">
                                        <span className="block m-t-sm">
                                        <strong className="font-bold text-lt">月色真美</strong>
                                        <b className="caret"></b>
                                        </span>
                                        <span className="text-muted text-xs block">只要心还跳。</span>
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu animated fadeInRight w hidden-folded no-padder">
                                        <li className="wrapper b-b m-b-sm bg-info m-n">
                                            <span className="arrow top hidden-folded arrow-info"></span>
                                            <div>
                                                <p>下午好，是时候打个盹了</p>
                                            </div>
                                            <div className="progress progress-xs m-b-none dker">
                                                <div className="progress-bar bg-white" data-toggle="tooltip"
                                                     data-original-title="时间已经度过62.50%" style={{width: 62.50}}></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <NavBar/>
                        </div>
                        <FootMen/>
                    </div>
                </aside>
            </Fragment>
        );

    }
}

export default    Asider
