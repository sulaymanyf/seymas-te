import React, { Component,Fragment } from 'react';

class Footer extends Component {

	    render() {
        return (
            <Fragment>
					 <div id="left_footer" className="footer wrapper-xs text-center nav-xs lt">
                            <div className="col-xs-4 no-padder">
                                <a target="_blank" className="tinav" href="https://www.ihewro.com/admin/" title=""
                                   data-toggle="tooltip" data-placement="top" data-original-title="后台管理">
                                    <span className="block"><i className="fontello fontello-cogs"></i></span>
                                    <small className="text-muted">管理</small>
                                </a>
                            </div>
                            <div className="col-xs-4 no-padder">
                                <a target="_blank" className="tinav" href="https://www.ihewro.com/feed/" title=""
                                   data-toggle="tooltip" data-placement="top" data-original-title="文章RSS地址">
                                    <span className="block"><i className="fontello fontello-rss"></i></span>
                                    <small className="text-muted">文章</small>
                                </a>
                            </div>
                            <div className="col-xs-4 no-padder">
                                <a target="_blank" href="https://www.ihewro.com/feed/comments/" title=""
                                   data-toggle="tooltip" data-placement="top" data-original-title="评论RSS地址">
                                    <span className="block"><i className="fontello fontello-rss-square"></i></span>
                                    <small className="text-muted">评论</small>
                                </a>
                            </div>
					 </div>
            </Fragment>
        );

    }
}
export default Footer;
