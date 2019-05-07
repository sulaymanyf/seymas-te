import React, { Component,Fragment } from 'react';

class Footer extends Component {

    render() {
        return (
            <Fragment>
                <footer id="footer" className="app-footer" role="footer">
                    <div className="wrapper b-t bg-light">
                        <span className="pull-right hidden-xs text-ellipsis">
                        <a href="http://www.miitbeian.gov.cn/" target="_blank">京ICP备17006801号</a> Powered by <a target="blank"
                                                                                                                href="http://www.typecho.org">Typecho</a>&nbsp;|&nbsp;Theme by <a
                            target="blank" href="https://www.ihewro.com/archives/489/">handsome</a>
                        </span>
                                    <span className="text-ellipsis">©&nbsp;2019 Copyright&nbsp;<a target="_blank"
                                                                                              href="https://www.upyun.com/index.html"><img
                                        src="https://www.ihewro.com/usr/uploads/sina/5cc11bd82ba27.jpg"
                                        style={{width: 50}}/></a></span>
                                </div>
                                <div className="topButton panel panel-default">
                                    <button id="goToTop" className="btn btn-default no-shadow pos-abt">
                                        <i className="fontello fontello-chevron-circle-up" aria-hidden="true"></i>
                                    </button>
                    </div>
                </footer>
            </Fragment>
);

}
}
export default Footer;
