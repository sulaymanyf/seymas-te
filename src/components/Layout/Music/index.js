import React, {Component, Fragment} from 'react';
import '../../../assets/bootstrap/css/bootstrap.min.css'
import '../../../assets/css/seyma.css'


class Music extends Component{

    render(){
        return(
            <Fragment>
                <li className="music-box hidden-xs hidden-sm">
                    <div id="skPlayer">
                        <audio className="skPlayer-source"
                               src="https://s320.xiami.net/177/2177/11923/146884_15922819_h.mp3?ccode=xiami_mac_&amp;expire=86400&amp;duration=260&amp;psid=9af70194d920982986dc47710241f422&amp;ups_client_netip=123.206.64.104&amp;ups_ts=1556176622&amp;ups_userid=0&amp;utid=&amp;vid=146884&amp;fn=146884_15922819_h.mp3&amp;vkey=Bdc0ba5677329d39354154633009ce365"
                               preload="auto" __idm_id__="232334337"></audio>
                        <div className="skPlayer-picture">
                            <img className="skPlayer-cover"
                                 src="https://pic.xiami.net/images/album/img51/102/5885a16d30432_5129451_1485152621.jpg@1e_1c_100Q_300h_300w"
                                 alt=""/>

                        </div>
                        <div className="skPlayer-control">
                            <p className="skPlayer-name">但愿人长久</p>
                            <div className="playController">
                                <div onClick="player.prev();" className="lastMusic  music-off "><i
                                    className="fontello fontello-angle-double-left"></i></div>
                                &nbsp;&nbsp;
                                <div className="runMusic  music-off skPlayer-play-btn"><i
                                    className="fontello fontello-play-circle-o runMusicIcon"></i></div>
                                &nbsp;&nbsp;
                                <div onClick="player.next();" className="nextMusic  music-off "><i
                                    className="fontello fontello-angle-double-right"></i></div>
                            </div>
                            <p className="skPlayer-author">王菲</p>
                            <div className="skPlayer-percent">
                                <div className="skPlayer-line-loading" style={{width: 31.41}}></div>
                                <div className="skPlayer-line lter"></div>
                            </div>
                            <p className="skPlayer-time">
                                <span className="skPlayer-cur">00:00</span>/<span
                                className="skPlayer-total">04:20</span>
                            </p>
                            <div className="skPlayer-volume">
                                <i className="skPlayer-icon glyphicon glyphicon-volume-up"></i>
                                <div className="skPlayer-percent">
                                    <div className="skPlayer-line"></div>
                                </div>
                            </div>
                            <i className="skPlayer-mode"></i>
                        </div>
                        <ul className="skPlayer-list animated flipInX">

                            <li data-index="0" className="skPlayer-curMusic">
                                <i className="skPlayer-list-sign"></i>
                                <span className="skPlayer-list-index">1</span>
                                <span className="skPlayer-list-name" title="但愿人长久">但愿人长久</span>
                                <span className="skPlayer-list-author" title="王菲">王菲</span>
                            </li>

                        </ul>
                    </div>
                </li>
            </Fragment>
        )
    }
}
export default Music