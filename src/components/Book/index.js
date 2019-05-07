import React, {Component, Fragment, PureComponent} from "react";
import {withRouter} from "react-router-dom";



class Book extends Component {


    constructor(props) {
        super(props)

    }

    // 组件装载之后调用
    componentDidMount() {
        console.log('Book组件装载之后调用')
    }
    componentWillReceiveProps() {
            console.log('BookcomponentWillReceiveProps')

            if (this.props.history.location !== this.props.location) {
                let params = this.props.history.location.pathname.split('/')
                console.log(params)
                // const [ , courseName, episodeName] = params
                // this.props.fetchEpisode({courseName, episodeName})
            }
        }


    render() {
        return (
            <Fragment>
                <div className="col">
                    <header id="small_widgets" className="bg-light lter b-b wrapper-md">
                        <h1 className="entry-title m-n font-thin h3 text-black l-h">万花筒<a className="plus-font-size"
                                                                                          data-toggle="tooltip"
                                                                                          data-original-title="点击改变文章字体大小"><i
                            className="glyphicon glyphicon-text-size
            " aria-hidden="true"></i></a></h1></header>
                    <div className="wrapper-md" id="post-panel">
                        <ol className="breadcrumb bg-white b-a" itemScope="">
                            <li>
                                <a href="https://www.ihewro.com/" itemProp="breadcrumb" title="" data-toggle="tooltip"
                                   data-original-title="返回首页"><i className="fontello fontello-home"
                                                                 aria-hidden="true"></i>&nbsp;首页</a>
                            </li>
                            <li className="active">万花筒&nbsp;&nbsp;</li>
                            <div style={{float: 'right'}}>
                                分享到：
                                <a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://www.ihewro.com/loves.html&amp;title=万花筒&amp;site=https://www.ihewro.com/"
                                   itemProp="breadcrumb" target="_blank" title="" data-toggle="tooltip"
                                   data-original-title="分享到QQ空间"
                                   onClick="window.open(this.href, 'qzone-share', 'width=550,height=335');return false;"><i
                                    style={{fontsize:15}} className="iconfont icon-qzone" aria-hidden="true"></i></a>
                                <a href="http://service.weibo.com/share/share.php?url=https://www.ihewro.com/loves.html&amp;title=万花筒"
                                   target="_blank" itemProp="breadcrumb" title="" data-toggle="tooltip"
                                   data-original-title="分享到微博"
                                   onClick="window.open(this.href, 'weibo-share', 'width=550,height=335');return false;"><i
                                    style={{fontsize:15}} className="fontello fontello-weibo" aria-hidden="true"></i></a>
                            </div>
                        </ol>
                        <div id="postpage" className="blog-post">
                            <article className="panel">
                                <div className="entry-thumbnail" aria-hidden="true">
                                    <div className="item-thumb lazy"
                                         style={{backgroundImage: 'url(https://www.ihewro.com/usr/uploads/2017/02/461805646.jpg!/fw/1200)'}}></div>
                                </div>
                                <div id="post-content" className="wrapper-lg">
                                    <div className="entry-content l-h-2x">
                                        <div className="booklist">
                                            <h2>我的书单</h2>
                                            <div className="text-muted m-xs">
                                                <i className="fontello fontello-clock-o m-xs" aria-hidden="true"></i>
                                                <small className="letterspacing douban_tips">以下数据最后更新于2019-05-05</small>
                                            </div>
                                            <div className="section">
                                                <div className="row">
                                                    {/*<script>$(function(){$(".douban_tips").text("以下数据最后更新于2019-05-05")})</script>*/}
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/4496038/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s28056024.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">HeadFirstJava</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/20440928/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s27989936.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span
                                                                    className="text-ellipsis">HTML、CSS、JavaScript网页制作从入门到精通</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/26753478/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s28790177.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">神逻辑:不讲道理的人怎么总有理！</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/26757433/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s28579451.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">来信勿拆</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/4152754/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s4123451.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">时生:东野圭吾作品08</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/1084336/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s1103152.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">小王子</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/1084165/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s1120877.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">平凡的世界</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/20278327/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s24476315.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span
                                                                    className="text-ellipsis">谁的青春不迷茫:一个奋斗小青年的逆袭人生</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/24458817/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s26601265.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">新编数据结构习题与解析</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/6424904/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s6382631.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">大话数据结构</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/5317075/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s4578461.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">蔡康永的说话之道</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/2053249/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s2380159.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">麦田里的守望者</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/2159042/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s27312538.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">挪威的森林</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/25984204/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s27466554.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">乖，摸摸头</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/26575812/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s28259771.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">阿弥陀佛么么哒</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/3259440/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s4610502.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">白夜行</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/4117922/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s4055190.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">嫌疑人X的献身</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/26413027/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s28976475.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">虚无的十字架</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/3102324/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s5909700.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">秘密</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/4009552/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s3960322.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">幻夜:东野圭吾作品06</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/4074636/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s4066862.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">放学后</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/10554309/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s24642953.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">恶意</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/26356948/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s28063701.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">摆渡人</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/25862578/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s27264181.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">解忧杂货店</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/26340138/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s29810488.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">岛上书店</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-4 col-md-3">
                                                        <div className="panel panel-default box-shadow">
                                                            <div className="panel-body no-padder">
                                                                <a target="_blank"
                                                                   href="https://book.douban.com/subject/1770782/"
                                                                   className="light-link">
                                                                    <img className="img-full no-padder m-n douban-list"
                                                                         src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/subject/m/public/s1727290.jpg"/>
                                                                </a>
                                                            </div>
                                                            <div className="panel-footer">
                                                                <span className="text-ellipsis">追风筝的人</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2>我的观影</h2>
                                                <div className="text-muted m-xs">
                                                    <i className="fontello fontello-clock-o m-xs"
                                                       aria-hidden="true"></i>
                                                    <small className="letterspacing douban_tips">以下数据最后更新于2019-05-05
                                                    </small>
                                                </div>
                                                <div className="padding">
                                                    <div className="row box-shadow-2">
                                                        <div className="col-md-12">
                                                            <div className="row row-xs">
                                                                {/*<script>$(function(){$(".douban_tips").text("以下数据最后更新于2019-05-05")})</script>*/}
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/27088993/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549148229.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                                            <span
                                                                                className="text-ellipsis">都挺好/AllisWell[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/1292220/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p449897379.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">情书/LoveLetter/WhenICloseMyEyes/LettersofLove</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/27110296/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2539661066.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">无名之辈/慌枪走板/ACoolFish[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/3882715/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1334122023.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">武林外传/MyOwnSwordsman[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/26266893/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2545472803.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">流浪地球/TheWanderingEarth[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/4840388/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2541240741.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                                            <span
                                                                                className="text-ellipsis">新喜剧之王/喜剧之王2/D计划[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/30163509/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2542973862.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                                            <span
                                                                                className="text-ellipsis">飞驰人生/Pegasus[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/25716096/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2540513831.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">狗十三/狗13/爱因斯坦和爱因斯坦[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/26374197/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2542867516.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">蜘蛛侠：平行宇宙/Spider-Man:IntotheSpider-Verse/蜘蛛侠：新纪元/蜘蛛人：新宇宙(台)[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/1291543/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">功夫/功夫3D/KungFuHustle[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/1961963/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2097947361.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                                            <span
                                                                                className="text-ellipsis">长江七号/长江7号/CJ7</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/30122633/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2531080870.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">快把我哥带走/GoBrother!/TakeMyBrotherAway[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/26985127/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529571873.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                                            <span
                                                                                className="text-ellipsis">一出好戏/大富翁/诳想曲[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/27605698/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2529206747.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">西虹市首富/HelloMr.Billionaire[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/26752088/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                                            <span
                                                                                className="text-ellipsis">我不是药神/中国药神/印度药神[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/26289144/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2259298553.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">滚蛋吧！肿瘤君/消失吧！肿瘤君/消失吧，肿瘤君[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/26925317/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2525528688.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">动物世界/赌博默示录中国版/AnimalWorld[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/6436751/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2182207180.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                                            <span
                                                                                className="text-ellipsis">全开女孩/全開ガール/全开girl</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/1292365/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2513253791.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                                            <span
                                                                                className="text-ellipsis">活着/人生/Lifetimes</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/10777687/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1816276065.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">7号房的礼物/7번방의선물/戆爸的礼物(港)/7号囚房的礼物</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/24743711/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2181062460.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">催眠大师/催眠档案之彻夜未眠/TheGreatHypnotist[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/26358696/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2478928137.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">我的前半生/TheFirstHalfofMyLife[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/1291999/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p792381411.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">重庆森林/重慶森林/ChungkingExpress[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/2149806/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p594972928.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                            <span
                                                                className="text-ellipsis">入殓师/おくりびと/礼仪师之奏鸣曲(港)/礼仪师(台)</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/3742360/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1512562287.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                                            <span
                                                                                className="text-ellipsis">让子弹飞/让子弹飞一会儿/火烧云[可播放]</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1299398/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1280323646.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">大话西游之月光宝盒/西遊記第壹佰零壹回之月光寶盒/西游记101回月光宝盒/齐天大圣东游记[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1849031/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1312700744.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">当幸福来敲门/ThePursuitofHappyness/寻找快乐的故事(港)/追求快乐[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1292213/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2455050536.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">大话西游之大圣娶亲/西遊記大結局之仙履奇緣/西游记完结篇仙履奇缘/齐天大圣西游记[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1291549/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910824951.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">放牛班的春天/Leschoristes/歌声伴我心(港)/唱诗班男孩[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1292001/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511146807.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">海上钢琴师/Laleggendadelpianistasull'oceano/声光伴我飞(港)/一九零零的传奇[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1291561/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1606727862.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">千与千寻/千と千尋の神隠し/神隐少女(台)/SpiritedAway</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1469441/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p468540198.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">看上去很美/小红花/LittleRedFlowers[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/27133303/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520331478.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">超时空同居/口袋宇宙/HowLongWillILoveU[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/5350027/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2530249558.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">妖猫传/沙门空海/沙门空海之大唐鬼宴[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/26862259/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2408407697.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*                <span*/}
                                                            {/*                    className="text-ellipsis">乘风破浪/Duckweed[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/4920389/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">头号玩家/ReadyPlayerOne/玩家一号/挑战者1号(港)[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/20495023/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">寻梦环游记/Coco/可可夜总会(台)/玩转极乐园(港)[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/26861685/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2514119443.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">红海行动/刀锋·红海行动/红海风暴[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/5912992/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1363250216.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*                <span*/}
                                                            {/*                    className="text-ellipsis">熔炉/도가니/无声呐喊(港)/漩涡</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/26759539/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2492917402.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">十万个冷笑话2/十冷2/OneHundredThousandBadJokesII[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/26363254/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2494701965.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*                <span*/}
                                                            {/*                    className="text-ellipsis">战狼2/新战狼/新战死沙场[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/26311973/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2302930556.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*                <span*/}
                                                            {/*                    className="text-ellipsis">唐人街探案/唐人街·探案/唐探[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/25884801/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2455156816.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*                <span*/}
                                                            {/*                    className="text-ellipsis">记忆大师/记忆战/催眠大师2[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/26774722/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2506228506.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">心理罪之城市之光/心理罪·城市之光/城市之光[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/27000999/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2499638425.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">生活大爆炸第十一季/TheBigBangTheorySeason11[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/26698897/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511355624.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">唐人街探案2/唐探2/DetectiveChinatownVol2[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1291588/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p453886709.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">岁月的童话/おもひでぽろぽろ/回忆点点滴滴/儿时的点点滴滴[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1292720/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1484728225.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">阿甘正传/ForrestGump/福雷斯特·冈普[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1295644/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">这个杀手不太冷/Léon/杀手莱昂/终极追杀令(台)[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1292052/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">肖申克的救赎/TheShawshankRedemption/月黑高飞(港)/刺激1995(台)[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/3319755/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p663036666.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">怦然心动/Flipped/萌动青春/青春萌动[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/25801066/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2411953504.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">西游伏妖篇/西游2：伏妖篇/西游降魔篇2[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/1394488/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p450895244.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">小情人/แฟนฉัน/MyGirl/Fanchan</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                            {/*    <div className="col-xs-6 col-sm-4 col-md-3">*/}
                                                            {/*        <div className="panel panel-default box-shadow">*/}
                                                            {/*            <div className="panel-body no-padder">*/}
                                                            {/*                <a target="_blank"*/}
                                                            {/*                   href="https://movie.douban.com/subject/10465127/"*/}
                                                            {/*                   className="light-link">*/}
                                                            {/*                    <img*/}
                                                            {/*                        className="img-full no-padder m-n douban-list"*/}
                                                            {/*                        src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1582240317.jpg">*/}
                                                            {/*                </a>*/}
                                                            {/*            </div>*/}
                                                            {/*            <div className="panel-footer">*/}
                                                            {/*<span*/}
                                                            {/*    className="text-ellipsis">孩子不坏/小孩不坏/WeNotNaughty[可播放]</span>*/}
                                                            {/*            </div>*/}
                                                            {/*        </div>*/}
                                                            {/*    </div>*/}
                                                                <div className="col-xs-6 col-sm-4 col-md-3">
                                                                    <div className="panel panel-default box-shadow">
                                                                        <div className="panel-body no-padder">
                                                                            <a target="_blank"
                                                                               href="https://movie.douban.com/subject/11614711/"
                                                                               className="light-link">
                                                                                <img
                                                                                    className="img-full no-padder m-n douban-list"
                                                                                    src="https://images.weserv.nl/?url=https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1679051458.jpg"/>
                                                                            </a>
                                                                        </div>
                                                                        <div className="panel-footer">
                                                                            <span
                                                                                className="text-ellipsis">我的狗蚪蚪/MyDogDouDou</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                    </div>
                </div>
            </Fragment>
    );

    }
    }

export default   (props)=><Book {...props} key={props.location.pathname} /> ;
// export default   (props)=><Book {.withRouter..props} key={props.location.pathname} />

