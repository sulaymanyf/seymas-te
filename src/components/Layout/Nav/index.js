import React, {Component, Fragment} from 'react';


class NavBar extends Component {
     render() {
        return (
            <Fragment>
                 <nav ui-nav="" className="navi clearfix">
                                <ul className="nav">
                                    <div className="line dk hidden-folded"></div>
                                    <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
                                        <span>导航</span>
                                    </li>
                                    <li>
                                        <a href="#" className="auto">
                                            <i className="iconfont icon-zhuye icon text-md"></i>
                                            <span>首页</span>
                                        </a>
                                    </li>
                                    <li><a target="_self" href="https://www.ihewro.com/project.html" className="auto"><i
                                        className="iconfont icon-fork icon text-md"></i><span>仓库</span></a></li>
                                    <li><a target="_self"  className="auto"><i
                                        className="fontello fontello-emo-tongue icon text-md"></i><span>朋友</span></a>
                                    </li>
                                    <li><a target="_self"
                                           className="auto"><i
                                        className="fontello fontello-picture icon text-md"></i><span>相册</span></a></li>
                                    <li className="line dk"></li>
                                    <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
                                        <span>组成</span>
                                    </li>
                                    <li>
                                        <a className="auto">
                                            <span className="pull-right text-muted">
                                            <i className="fontello icon-fw fontello-angle-right text"></i>
                                            <i className="fontello icon-fw fontello-angle-down text-active"></i>
                                            </span>
                                            <i className="glyphicon glyphicon-th"></i>
                                            <span>分类</span>
                                        </a>
                                        <ul className="nav nav-sub dk">
                                            <li className="nav-sub-header">
                                                <a>
                                                    <span>分类</span>
                                                </a>
                                            </li>
                                            <li><a href="https://www.ihewro.com/category/tech/"><b
                                                className="badge pull-right">10</b><span>设计作品</span></a></li>
                                            <li><a href="https://www.ihewro.com/category/share/"><b
                                                className="badge pull-right">39</b><span>技巧杂烩</span></a></li>
                                            <li><a href="https://www.ihewro.com/category/life/"><b
                                                className="badge pull-right">85</b><span>生活随笔</span></a></li>
                                            <li><a href="https://www.ihewro.com/category/image/"><b
                                                className="badge pull-right">7</b><span>相册图片</span></a></li>
                                            <li><a href="https://www.ihewro.com/category/null/"><b
                                                className="badge pull-right">1</b><span>无处安放</span></a></li>
                                            <li><a className="auto" href="https://www.ihewro.com/category/hobby/"><span
                                                className="pull-right text-muted">
                                                    <i className="fontello icon-fw fontello-angle-right text"></i>
                                                    <i className="fontello icon-fw fontello-angle-down text-active"></i>
                                                    </span><span>兴趣爱好</span></a>
                                                <ul className="nav nav-sub dk child-nav">
                                                    <li><a href="https://www.ihewro.com/category/book/"><b
                                                        className="badge pull-right">0</b><span>书评</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/movie/"><b
                                                        className="badge pull-right">6</b><span>影评</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/music/"><b
                                                        className="badge pull-right">2</b><span>乐评</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/hardware/"><b
                                                        className="badge pull-right">2</b><span>硬件评测</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/software/"><b
                                                        className="badge pull-right">1</b><span>软件评测</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/guitar/"><b
                                                        className="badge pull-right">2</b><span>吉他学习</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/mystery/"><b
                                                        className="badge pull-right">1</b><span>未能分类</span></a></li>
                                                </ul>
                                            </li>
                                            <li><a className="auto" href="https://www.ihewro.com/category/wiki/"><span
                                                className="pull-right text-muted">
                                                    <i className="fontello icon-fw fontello-angle-right text"></i>
                                                    <i className="fontello icon-fw fontello-angle-down text-active"></i>
                                                    </span><span>学习笔记</span></a>
                                                <ul className="nav nav-sub dk child-nav">
                                                    <li><a href="https://www.ihewro.com/category/c_plus/"><b
                                                        className="badge pull-right">1</b><span>c++</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/java_back/"><b
                                                        className="badge pull-right">2</b><span>java</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/php/"><b
                                                        className="badge pull-right">2</b><span>php</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/front-end/"><b
                                                        className="badge pull-right">11</b><span>web</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/git/"><b
                                                        className="badge pull-right">1</b><span>git</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/acm/"><b
                                                        className="badge pull-right">5</b><span>acm</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/python/"><b
                                                        className="badge pull-right">1</b><span>python</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/android/"><b
                                                        className="badge pull-right">1</b><span>android</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/typecho/"><b
                                                        className="badge pull-right">13</b><span>typecho</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/database/"><b
                                                        className="badge pull-right">1</b><span>数据库</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/server/"><b
                                                        className="badge pull-right">4</b><span>服务器</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/data_structure/"><b
                                                        className="badge pull-right">2</b><span>数据结构</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/ai/"><b
                                                        className="badge pull-right">1</b><span>人工智能</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/network/"><b
                                                        className="badge pull-right">2</b><span>计算机网络</span></a></li>
                                                </ul>
                                            </li>
                                            <li><a className="auto" href="https://www.ihewro.com/category/others/"><span
                                                className="pull-right text-muted">
                                                    <i className="fontello icon-fw fontello-angle-right text"></i>
                                                    <i className="fontello icon-fw fontello-angle-down text-active"></i>
                                                    </span><span>都有明天</span></a>
                                                <ul className="nav nav-sub dk child-nav">
                                                    <li><a href="https://www.ihewro.com/category/just/"><b
                                                        className="badge pull-right">1</b><span>胡言乱宇</span></a></li>
                                                    <li><a href="https://www.ihewro.com/category/friday/"><b
                                                        className="badge pull-right">0</b><span>阳光灿烂的日子</span></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="auto">
                                                <span className="pull-right text-muted">
                                                <i className="fontello icon-fw fontello-angle-right text"></i>
                                                <i className="fontello icon-fw fontello-angle-down text-active"></i>
                                                </span>
                                            <i className="glyphicon glyphicon-file"></i>
                                            <span>页面</span>
                                        </a>
                                        <ul className="nav nav-sub dk">
                                            <li className="nav-sub-header">
                                                <a data-no-instant="">
                                                    <span>页面</span>
                                                </a>
                                            </li>
                                            <li><a href="https://www.ihewro.com/links.html"><span>链接库</span></a></li>
                                            <li><a href="https://www.ihewro.com/archives.html"><span>归档栏</span></a></li>
                                            <li><a href="https://www.ihewro.com/msg.html"><span>留言板</span></a></li>
                                            <li><a href="https://www.ihewro.com/about.html"><span>关于我</span></a></li>
                                            <li><a href="https://www.ihewro.com/cross.html"><span>时光机</span></a></li>
                                            <li><a href="https://www.ihewro.com/loves.html"><span>万花筒</span></a></li>
                                            <li><a href="https://www.ihewro.com/project.html"><span>实验室</span></a></li>
                                            <li><a href="https://www.ihewro.com/donate.html"><span>赞助我</span></a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="auto">
                                                <span className="pull-right text-muted">
                                                <i className="fontello icon-fw fontello-angle-right text"></i>
                                                <i className="fontello icon-fw fontello-angle-down text-active"></i>
                                                </span>
                                            <i className="iconfont icon-links"></i>
                                            <span>友链</span>
                                        </a>
                                        <ul className="nav nav-sub dk">
                                            <li className="nav-sub-header">
                                                <a data-no-instant="">
                                                    <span>友链</span>
                                                </a>
                                            </li>
                                            <li data-original-title="高一学生的搞事日常 " data-toggle="tooltip"
                                                data-placement="top"><a href="https://www.liaronce.com" target="_blank"><span>LiarOnce</span></a>
                                            </li>
                                            <li data-original-title="安静的做一个沉默中的分享、记录小站" data-toggle="tooltip"
                                                data-placement="top"><a href="https://www.mocurio.com/" target="_blank"><span>初夏阳光</span></a>
                                            </li>
                                            <li data-original-title="热爱前端，喜欢编程，也会一些设计，知识杂而不精，善于折腾并乐此不疲。"
                                                data-toggle="tooltip" data-placement="top"><a href="https://biji.io"
                                                                                              target="_blank"><span>设计笔记</span></a>
                                            </li>
                                            <li data-original-title="一举一动，都是承诺，会被另一个人看在眼里，记在心上的。
                                                " data-toggle="tooltip" data-placement="top"><a href="https://www.moerats.com/" target="_blank"><span>Rat's Blog</span></a>
                                            </li>
                                            <li data-original-title="人若有志，万事可为！" data-toggle="tooltip"
                                                data-placement="top"><a href="https://www.zyiev.cn"
                                                                        target="_blank"><span>若志奕鑫的小站</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                     </Fragment>
        );

    }
}

export default    NavBar