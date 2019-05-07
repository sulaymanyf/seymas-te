import React, {Component, Fragment} from 'react';
import {withRouter} from "react-router-dom";

{/*<style>.page-navigator>li>a,.page-navigator>li>span{line - height:1.42857143;padding:6px 12px;}</style>*/
}

class Home extends Component {


    constructor(props) {
        super(props)

    }

    // 组件装载之后调用
    componentDidMount() {
        console.log('Home组件装载之后调用')
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('HomeWillReceiveProps: '+ nextProps)
    //     if (this.props.history.location !== this.props.location) {
    //         let params = this.props.history.location.pathname.split('/')
    //         console.log('HomeWillReceiveProps: '+ params)
    //         // const [ , courseName, episodeName] = params
    //         // this.props.fetchEpisode({courseName, episodeName})
    //     }
    // }
    render() {


        return (
            <Fragment>
                <div className="col center-part">
                    <header className="bg-light lter b-b wrapper-md">
                        <h1 className="m-n font-thin h3 text-black l-h">友人C</h1>
                        <small className="text-muted letterspacing indexWords">那是霓虹灯到月亮的距离。</small>
                    </header>
                    <div className="wrapper-md" id="post-panel">
                        <div className="blog-post">
                            <div className="panel">
                                <div className="index-post-img">
                                    <a href="https://www.ihewro.com/archives/489/">
                                        <div className="item-thumb lazy"
                                             style={{backgroundImage: 'url(https://www.ihewro.com/usr/uploads/2019/01/762065921.jpg!/fw/1200)'}}>
                                        </div>
                                    </a>
                                </div>
                                <div className="post-meta wrapper-lg"><h2
                                    className="m-t-none text-ellipsis index-post-title"><a
                                    href="https://www.ihewro.com/archives/489/"><span
                                    className="label text-sm bg-danger pull-left m-t-xs m-r"
                                    style={{marginTop: 2}}>置顶</span>handsome —— 一如少年般模样</a></h2><p
                                    className="summary l-h-2x text-muted">V5.1.1 |
                                    主题简介在复杂中，保持简洁。如你所见，这是一款花费很长时间才得以完成的主题。在功能强大和体积轻巧中不断权衡，然后呈现在你的面前。为了更好...</p>
                                    <div className="line line-lg b-b b-light"></div>
                                    <div className="text-muted post-item-foot-icon text-ellipsis">
                                        <i className="fontello fontello-user text-muted"></i><span
                                        className="m-r-sm">&nbsp;<a
                                        href="https://www.ihewro.com/author/1/">友人C&nbsp;</a></span>
                                        <i className="fontello fontello-clock-o text-muted"></i><span
                                        className="m-r-sm">&nbsp;2016 年 12 月 05 日</span><a
                                        href="https://www.ihewro.com/archives/489/#comments"
                                        className="m-l-sm post-item-comment"><i
                                        className="iconfont icon-comments-o text-muted"></i>&nbsp;1379
                                        条评论</a></div>
                                </div>
                            </div>
                            <div className="panel-small">
                                <div className="index-post-img-small post-feature index-img-small">
                                    <a href="https://www.ihewro.com/archives/942/">
                                        <div className="item-thumb-small lazy"
                                             style={{backgroundImage: 'url(https://www.ihewro.com/usr/uploads/2019/05/1442257986.jpg!/fw/500)'}}></div>
                                    </a>
                                </div>
                                <div className="post-meta wrapper-lg"><h2
                                    className="m-t-none text-ellipsis index-post-title"><a
                                    href="https://www.ihewro.com/archives/942/">不要期望！</a></h2><p
                                    className="summary l-h-2x text-muted">暂时无可提供的摘要</p>
                                    <div className="line line-lg b-b b-light"></div>
                                    <div className="text-muted post-item-foot-icon text-ellipsis">
                                        <i className="fontello fontello-user text-muted"></i><span
                                        className="m-r-sm">&nbsp;<a
                                        href="https://www.ihewro.com/author/1/">友人C&nbsp;</a></span>
                                        <i className="fontello fontello-clock-o text-muted"></i><span
                                        className="m-r-sm">&nbsp;2019 年 05 月 01 日</span><a
                                        href="https://www.ihewro.com/archives/942/#comments"
                                        className="m-l-sm post-item-comment"><i
                                        className="iconfont icon-comments-o text-muted"></i>&nbsp;关闭评论</a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="post-meta wrapper-lg">
                                    <div className="item-meta-ico bg-ico-chat"></div>
                                    <h2 className="m-t-none text-ellipsis index-post-title"><a
                                        href="https://www.ihewro.com/archives/938/">出发、自己、其他</a></h2><p
                                    className="summary l-h-2x text-muted">一个月很快就过去了。这个月可能是大学时期最放松的一个月了吧。4月10号答辩完之后，毕业设计我就没怎么动过。一开始前几天我还内心很自我批评，后来我干脆“坦然...</p>
                                    <div className="line line-lg b-b b-light"></div>
                                    <div className="text-muted post-item-foot-icon text-ellipsis">
                                        <i className="fontello fontello-user text-muted"></i><span
                                        className="m-r-sm">&nbsp;<a
                                        href="https://www.ihewro.com/author/1/">友人C&nbsp;</a></span>
                                        <i className="fontello fontello-clock-o text-muted"></i><span
                                        className="m-r-sm">&nbsp;2019 年 04 月 25 日</span><a
                                        href="https://www.ihewro.com/archives/938/#comments"
                                        className="m-l-sm post-item-comment"><i
                                        className="iconfont icon-comments-o text-muted"></i>&nbsp;关闭评论</a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="post-meta wrapper-lg">
                                    <div className="item-meta-ico bg-ico-code"></div>
                                    <h2 className="m-t-none text-ellipsis index-post-title"><a
                                        href="https://www.ihewro.com/archives/935/">新浪图床迁移至typecho助手</a>
                                    </h2><p
                                    className="summary l-h-2x text-muted">新浪图床似乎开始防盗链了，免费的服务果然是最贵的，这一点也许在很长时间后我们才能发现...</p>
                                    <div className="line line-lg b-b b-light"></div>
                                    <div className="text-muted post-item-foot-icon text-ellipsis">
                                        <i className="fontello fontello-user text-muted"></i><span
                                        className="m-r-sm">&nbsp;<a
                                        href="https://www.ihewro.com/author/1/">友人C&nbsp;</a></span>
                                        <i className="fontello fontello-clock-o text-muted"></i><span
                                        className="m-r-sm">&nbsp;2019 年 04 月 25 日</span><a
                                        href="https://www.ihewro.com/archives/935/#comments"
                                        className="m-l-sm post-item-comment"><i
                                        className="iconfont icon-comments-o text-muted"></i>&nbsp;37 条评论</a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="post-meta wrapper-lg">
                                    <div className="item-meta-ico bg-ico-note"></div>
                                    <h2 className="m-t-none text-ellipsis index-post-title"><a
                                        href="https://www.ihewro.com/archives/933/">终端与shell的区别</a></h2><p
                                    className="summary l-h-2x text-muted">当我从Linux转换开始使用macOS的时候，我发现macOS的终端很丑，它长这样：于是我找到这样一篇文章：Mac
                                    OS 终端 iTerm2 并配置 zs...</p>
                                    <div className="line line-lg b-b b-light"></div>
                                    <div className="text-muted post-item-foot-icon text-ellipsis">
                                        <i className="fontello fontello-user text-muted"></i><span
                                        className="m-r-sm">&nbsp;<a
                                        href="https://www.ihewro.com/author/1/">友人C&nbsp;</a></span>
                                        <i className="fontello fontello-clock-o text-muted"></i><span
                                        className="m-r-sm">&nbsp;2019 年 04 月 19 日</span><a
                                        href="https://www.ihewro.com/archives/933/#comments"
                                        className="m-l-sm post-item-comment"><i
                                        className="iconfont icon-comments-o text-muted"></i>&nbsp;6 条评论</a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="post-meta wrapper-lg">
                                    <div className="item-meta-ico bg-ico-note"></div>
                                    <h2 className="m-t-none text-ellipsis index-post-title"><a
                                        href="https://www.ihewro.com/archives/932/">常用的包管理工具的简单使用</a></h2><p
                                    className="summary l-h-2x text-muted">brew(homebrew)brew
                                    是macOS系统的包管理软件。Homebrew...</p>
                                    <div className="line line-lg b-b b-light"></div>
                                    <div className="text-muted post-item-foot-icon text-ellipsis">
                                        <i className="fontello fontello-user text-muted"></i><span
                                        className="m-r-sm">&nbsp;<a
                                        href="https://www.ihewro.com/author/1/">友人C&nbsp;</a></span>
                                        <i className="fontello fontello-clock-o text-muted"></i><span
                                        className="m-r-sm">&nbsp;2019 年 04 月 18 日</span><a
                                        href="https://www.ihewro.com/archives/932/#comments"
                                        className="m-l-sm post-item-comment"><i
                                        className="iconfont icon-comments-o text-muted"></i>&nbsp;2 条评论</a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="index-post-img">
                                    <a href="https://www.ihewro.com/archives/931/">
                                        <div className="item-thumb lazy"
                                             style={{backgroundImage: 'url(https://www.ihewro.com/usr/uploads/2019/04/4040952091.jpeg!/fw/1200)'}}>
                                        </div>
                                    </a>
                                </div>
                                <div className="post-meta wrapper-lg"><h2
                                    className="m-t-none text-ellipsis index-post-title"><a
                                    href="https://www.ihewro.com/archives/931/">正确提问方式</a></h2><p
                                    className="summary l-h-2x text-muted">发这篇文章的原因，因为每天会接收到各种问题。我希望用最少的时间，在一个和谐的气氛回答完这些问题，达到双方共赢。已经有提问的智慧这么优秀全面的文章，但我还想...</p>
                                    <div className="line line-lg b-b b-light"></div>
                                    <div className="text-muted post-item-foot-icon text-ellipsis">
                                        <i className="fontello fontello-user text-muted"></i><span
                                        className="m-r-sm">&nbsp;<a
                                        href="https://www.ihewro.com/author/1/">友人C&nbsp;</a></span>
                                        <i className="fontello fontello-clock-o text-muted"></i><span
                                        className="m-r-sm">&nbsp;2019 年 04 月 13 日</span><a
                                        href="https://www.ihewro.com/archives/931/#comments"
                                        className="m-l-sm post-item-comment"><i
                                        className="iconfont icon-comments-o text-muted"></i>&nbsp;27 条评论</a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="post-meta wrapper-lg">
                                    <div className="item-meta-ico bg-ico-chat"></div>
                                    <h2 className="m-t-none text-ellipsis index-post-title"><a
                                        href="https://www.ihewro.com/archives/929/">一些小事</a></h2><p
                                    className="summary l-h-2x text-muted">烫发我今天晚上烫发了！！我现在有点后悔。虽然我本来只是打算简单理个头发，但是也不能全...</p>
                                    <div className="line line-lg b-b b-light"></div>
                                    <div className="text-muted post-item-foot-icon text-ellipsis">
                                        <i className="fontello fontello-user text-muted"></i><span
                                        className="m-r-sm">&nbsp;<a
                                        href="https://www.ihewro.com/author/1/">友人C&nbsp;</a></span>
                                        <i className="fontello fontello-clock-o text-muted"></i><span
                                        className="m-r-sm">&nbsp;2019 年 04 月 10 日</span><a
                                        href="https://www.ihewro.com/archives/929/#comments"
                                        className="m-l-sm post-item-comment"><i
                                        className="iconfont icon-comments-o text-muted"></i>&nbsp;23 条评论</a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="index-post-img">
                                    <a href="https://www.ihewro.com/archives/928/">
                                        <div className="item-thumb lazy"
                                             style={{backgroundImage: 'url(https://www.ihewro.com/usr/uploads/2019/04/541244600.jpg!/fw/1200)'}}>
                                        </div>
                                    </a>
                                </div>
                                <div className="post-meta wrapper-lg"><h2
                                    className="m-t-none text-ellipsis index-post-title"><a
                                    href="https://www.ihewro.com/archives/928/">银河的声音</a></h2><p
                                    className="summary l-h-2x text-muted">我怎么没有听说过银河也有声音啊那是你没有用心听真的吗这篇文章，其实几天前我就敲了一些文字，现在回过来看，总觉得是强逼硬凑，索性全部删掉了。生活记录类的文章...</p>
                                    <div className="line line-lg b-b b-light"></div>
                                    <div className="text-muted post-item-foot-icon text-ellipsis">
                                        <i className="fontello fontello-user text-muted"></i><span
                                        className="m-r-sm">&nbsp;<a
                                        href="https://www.ihewro.com/author/1/">友人C&nbsp;</a></span>
                                        <i className="fontello fontello-clock-o text-muted"></i><span
                                        className="m-r-sm">&nbsp;2019 年 04 月 08 日</span><a
                                        href="https://www.ihewro.com/archives/928/#comments"
                                        className="m-l-sm post-item-comment"><i
                                        className="iconfont icon-comments-o text-muted"></i>&nbsp;关闭评论</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav className="text-center m-t-lg m-b-lg" role="navigation">
                            <ol className="page-navigator">
                                <li className="current"><a href="https://www.ihewro.com/page/1/">1</a></li>
                                <li><a href="https://www.ihewro.com/page/2/">2</a></li>
                                <li><a href="https://www.ihewro.com/page/3/">3</a></li>
                                <li><a href="https://www.ihewro.com/page/4/">4</a></li>
                                <li><span>...</span></li>
                                <li><a href="https://www.ihewro.com/page/26/">26</a></li>
                                <li className="next"><a href="https://www.ihewro.com/page/2/"><i
                                    className="fontello fontello-chevron-right"></i></a></li>
                            </ol>
                        </nav>
                        {/*<style>.page-navigator>li>a,.page-navigator>li>span{line - height:1.42857143;padding:6px 12px;}</style>*/}
                    </div>
                </div>
            </Fragment>
        );

    }
}

export default Home
