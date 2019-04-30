/**
 * @version 4.2.3
 * @name react-jinke-music-player
 * @description Maybe the best beautiful HTML5 responsive player component for react :)
 * @author Jinke.Li <1359518268@qq.com>
 */

import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import isMobile from "is-mobile";
import Slider from "rc-slider/lib/Slider";
import Switch from "rc-switch";
import {
    formatTime,
    createRandomNum,
    arrayEqual,
    uuId,
    isSafari
} from "./utils";
import AudioListsPanel from "./components/AudioListsPanel";
import AudioPlayerMobile from "./components/PlayerMobile";
import Draggable from "react-draggable";

import {
    FaHeadphones,
    FaMinusSquare,
    FaPlayCircle,
    FaPauseCircle,
    FaIndent,
} from "react-icons/fa";

import { MdDeleteForever } from "react-icons/md";
import { IoMdReorder ,IoMdClose} from "react-icons/io";
import  {
    FiRefreshCcw ,
    FiVolume1,
    FiVolume ,
    FiDownload ,
    FiLoader,
    FiShuffle,
    FiSkipForward,
    FiSkipBack,

} from "react-icons/fi"

import { TiArrowLoop ,TiArrowRepeat} from "react-icons/ti";
// import FaMinusSquare from "react-icons/lib/fa/minus-square-o";
// import FaPlayCircle from "react-icons/lib/fa/play-circle";
// import FaPauseCircle from "react-icons/lib/fa/pause-circle";
// import FiRefreshCcw from "react-icons/lib/fa/refresh";
// import FiVolume1 from "react-icons/lib/md/volume-up";
// import FiVolume from "react-icons/lib/md/volume-off";
// import FiDownload from "react-icons/lib/fa/cloud-download";
// import FiLoader from "react-icons/lib/fa/spinner";
// import TiArrowLoop from "react-icons/lib/md/repeat-one";
// import TiArrowRepeat from "react-icons/lib/md/repeat";
// import FiShuffle from "react-icons/lib/ti/arrow-shuffle";
// import IoMdReorder from "react-icons/lib/md/view-headline";
// import FaIndent from "react-icons/lib/md/queue-music";
// import FiSkipForward from "react-icons/lib/md/skip-next";
// import FiSkipBack from "react-icons/lib/md/skip-previous";
// import IoMdClose from "react-icons/lib/md/close";
// import MdDeleteForever from "react-icons/lib/fa/trash-o";

import "rc-slider/assets/index.css";
import "rc-switch/assets/index.css";

const IS_MOBILE = isMobile();

export const AnimatePlayIcon = () => (
    <FaPlayCircle className="react-jinke-music-player-play-icon"/>
);
export const AnimatePauseIcon = () => (
    <FaPauseCircle className="react-jinke-music-player-pause-icon"/>
);

export const Load = () => (
    <span className="loading group" key="loading">
    <FiLoader/>
  </span>
);

export const PlayModel = ({visible, value}) => (
    <div
        className={classNames("play-mode-title", {
            "play-mode-title-visible": visible
        })}
        key="play-mode-title"
    >
        {value}
    </div>
);

//迷你模式进度条
export const CircleProcessBar = ({progress = 0, r = 40} = {}) => {
    const _progress = progress.toFixed(2);
    const perimeter = Math.PI * 2 * r;
    const strokeDasharray = `${~~(perimeter * _progress)} ${~~(
        perimeter *
        (1 - _progress)
    )}`;
    return (
        <svg className="audio-circle-process-bar">
            <circle
                cx={r}
                cy={r}
                r={r - 1}
                fill="none"
                className="stroke"
                strokeDasharray={strokeDasharray}
            />
            <circle
                cx={r}
                cy={r}
                r={r - 1}
                fill="none"
                className="bg"
                strokeDasharray="0 1000"
            />
        </svg>
    );
};

const sliderBaseOptions = {
    min: 0,
    step: 0.01,
    trackStyle: {backgroundColor: "#31c27c"},
    handleStyle: {backgroundColor: "#31c27c", border: "2px solid #fff"}
};

export default class ReactJkMusicPlayer extends PureComponent {
    initPlayId = ""; //初始播放id
    audioListRemoveAnimateTime = 350; // 列表删除动画时间(ms)
    NETWORK_STATE = {
        NETWORK_EMPTY: 0, //未初始化
        NETWORK_IDLE: 1, //未使用网络 304 缓存
        NETWORK_LOADING: 2, //浏览器正在下载数据
        NETWORK_NO_SOURCE: 3 //未找到资源
    };
    READY_SUCCESS_STATE = 4;
    state = {
        audioLists: [],
        playId: this.initPlayId, //播放id
        name: "", //当前歌曲名
        cover: "", //当前歌曲封面
        singer: "", //当前歌手
        musicSrc: "", //当前歌曲链接
        isMobile: IS_MOBILE,
        toggle: false,
        pause: true,
        playing: false,
        duration: 0,
        currentTime: 0,
        isLoop: false,
        isMute: false,
        soundValue: 100,
        isDrag: false, //是否支持拖拽
        currentX: 0,
        currentY: 0,
        moveX: 0,
        moveY: 0,
        isMove: false,
        loading: false,
        audioListsPanelVisible: false,
        playModelNameVisible: false,
        theme: this.darkThemeName,
        extendsContent: [], //自定义扩展功能按钮
        playMode: "", //当前播放模式
        currentAudioVolume: 0, //当前音量  静音后恢复到之前记录的音量
        initAnimate: false,
        isInitAutoplay: false,
        isInitRemember: false,
        loadProgress: 0,
        removeId: -1,
        isNeedMobileHack: IS_MOBILE
    };
    static defaultProps = {
        audioLists: [],
        theme: "dark",
        mode: "mini",
        playModeText: {
            order: "order",
            orderLoop: "orderLoop",
            singleLoop: "singleLoop",
            shufflePlay: "shufflePlay"
        },
        defaultPlayMode: "order",
        defaultPosition: {
            left: 0,
            top: 0
        },
        controllerTitle: <FaHeadphones/>,
        panelTitle: "PlayList",
        closeText: "close",
        openText: "open",
        notContentText: "no music",
        checkedText: "",
        unCheckedText: "",
        once: false, //onAudioPlay 事件  是否只触发一次
        drag: true,
        toggleMode: true, //能换在迷你 和完整模式下 互相切换
        showMiniModeCover: true, //迷你模式下 是否显示封面图
        showDownload: true,
        showPlay: true,
        showReload: true,
        showPlayMode: true,
        showThemeSwitch: true,
        playModeTipVisible: false, //手机端切换播放模式
        autoPlay: true,
        defaultVolume: 100,
        showProgressLoadBar: true, //音频预加载进度
        seeked: true,
        playModeShowTime: 600, //播放模式提示 显示时间,
        bounds: "body", //移动边界
        showMiniProcessBar: false, //是否在迷你模式 显示进度条
        loadAudioErrorPlayNext: true, // 加载音频失败时 是否尝试播放下一首
        preload: false, //是否在页面加载后立即加载音频
        glassBg: false, //是否是毛玻璃效果
        remember: false, //是否记住当前播放状态
        remove: true, //音乐是否可以删除
        defaultPlayIndex: 0 //默认播放索引
    };
    static propTypes = {
        audioLists: PropTypes.array.isRequired,
        theme: PropTypes.oneOf(["dark", "light"]),
        mode: PropTypes.oneOf(["mini", "full"]),
        defaultPlayMode: PropTypes.oneOf([
            "order",
            "orderLoop",
            "singleLoop",
            "shufflePlay"
        ]),
        drag: PropTypes.bool,
        seeked: PropTypes.bool,
        autoPlay: PropTypes.bool,
        playModeText: PropTypes.object,
        panelTitle: PropTypes.string,
        closeText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        openText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        notContentText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        controllerTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        defaultPosition: PropTypes.shape({
            top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        }),
        onAudioPlay: PropTypes.func,
        onAudioPause: PropTypes.func,
        onAudioEnded: PropTypes.func,
        onAudioAbort: PropTypes.func,
        onAudioVolumeChange: PropTypes.func,
        onAudioLoadError: PropTypes.func,
        onAudioProgress: PropTypes.func,
        onAudioSeeked: PropTypes.func,
        onAudioDownload: PropTypes.func,
        onAudioReload: PropTypes.func,
        onThemeChange: PropTypes.func,
        onAudioListsChange: PropTypes.func,
        onPlayModeChange: PropTypes.func,
        onModeChange: PropTypes.func,
        onAudioListsPanelChange: PropTypes.func,
        onAudioPlayTrackChange: PropTypes.func,
        onAudioListsDragEnd: PropTypes.func,
        showDownload: PropTypes.bool,
        showPlay: PropTypes.bool,
        showReload: PropTypes.bool,
        showPlayMode: PropTypes.bool,
        showThemeSwitch: PropTypes.bool,
        showMiniModeCover: PropTypes.bool,
        toggleMode: PropTypes.bool,
        once: PropTypes.bool,
        extendsContent: PropTypes.array,
        checkedText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        unCheckedText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        defaultVolume: PropTypes.number,
        playModeShowTime: PropTypes.number,
        bounds: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        showMiniProcessBar: PropTypes.bool,
        loadAudioErrorPlayNext: PropTypes.bool,
        preload: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf(["auto", "metadata", "none"])
        ]),
        glassBg: PropTypes.bool,
        remember: PropTypes.bool,
        remove: PropTypes.bool,
        defaultPlayIndex: PropTypes.number,
        playIndex: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.audio = null; //当前播放器
        this.lightThemeName = "light";
        this.darkThemeName = "dark";
        //模式配置
        this.toggleModeName = {
            full: "full",
            mini: "mini"
        };
        this.targetId = "music-player-controller";
        this.openPanelPeriphery = 1; //移动差值 在 这之间 认为是点击打开panel
        this.x = 0;
        this.y = 0;
        this.isDrag = false;

        const {
            playModeText: {order, orderLoop, singleLoop, shufflePlay}
        } = props;
        //播放模式配置
        this.PLAY_MODE = {
            order: {
                key: "order",
                value: order
            },
            orderLoop: {
                key: "orderLoop",
                value: orderLoop
            },
            singleLoop: {
                key: "singleLoop",
                value: singleLoop
            },
            shufflePlay: {
                key: "shufflePlay",
                value: shufflePlay
            }
        };
        this._PLAY_MODE_ = Object.values(this.PLAY_MODE);
        this._PLAY_MODE_LENGTH_ = this._PLAY_MODE_.length;
    }

    render() {
        const {
            className,
            controllerTitle,
            closeText,
            openText,
            notContentText,
            drag,
            style,
            showDownload,
            showPlay,
            showReload,
            showPlayMode,
            showThemeSwitch,
            panelTitle,
            checkedText,
            unCheckedText,
            toggleMode,
            showMiniModeCover,
            extendsContent,
            defaultPlayMode,
            seeked,
            showProgressLoadBar,
            bounds,
            defaultPosition,
            showMiniProcessBar,
            preload,
            glassBg,
            remove
        } = this.props;

        const {
            toggle,
            playing,
            duration,
            currentTime,
            isMute,
            soundValue,
            moveX,
            moveY,
            loading,
            audioListsPanelVisible,
            pause,
            theme,
            name,
            cover,
            singer,
            musicSrc,
            playId,
            isMobile,
            playMode,
            playModeTipVisible,
            playModelNameVisible,
            initAnimate,
            loadProgress,
            audioLists,
            removeId
        } = this.state;

        const preloadState =
            preload === false || preload === "none"
                ? {}
                : preload === true
                ? {preload: "auto"}
                : {preload};

        const panelToggleAnimate = initAnimate
            ? {show: audioListsPanelVisible, hide: !audioListsPanelVisible}
            : {show: audioListsPanelVisible};

        const _playMode_ = this.PLAY_MODE[playMode || defaultPlayMode];

        const currentPlayMode = _playMode_["key"];
        const currentPlayModeName = _playMode_["value"];

        const isShowMiniModeCover = showMiniModeCover
            ? {
                style: {
                    backgroundImage: `url(${cover})`
                }
            }
            : {};

        const _currentTime = formatTime(currentTime);
        const _duration = formatTime(duration);

        const progressHandler = seeked
            ? {
                onChange: this.onHandleProgress,
                onAfterChange: this.onAudioSeeked
            }
            : {};
        //进度条
        const ProgressBar = (
            <Slider
                max={Math.ceil(duration)}
                defaultValue={0}
                value={currentTime}
                {...progressHandler}
                {...sliderBaseOptions}
            />
        );

        //下载按钮
        const DownloadComponent = showDownload ? (
            <span
                className="group audio-download"
                {...{[IS_MOBILE ? "onTouchStart" : "onClick"]: this.onAudioDownload}}
            >
        <FiDownload/>
      </span>
        ) : (
            undefined
        );

        //主题开关
        const ThemeSwitchComponent = showThemeSwitch ? (
            <span className="group theme-switch">
        <Switch
            className="theme-switch-container"
            onChange={this.themeChange}
            checkedChildren={checkedText}
            unCheckedChildren={unCheckedText}
            checked={theme === this.lightThemeName}
        />
      </span>
        ) : (
            undefined
        );

        //重放
        const ReloadComponent = showReload ? (
            <span
                className="group reload-btn"
                {...(IS_MOBILE
                    ? {onTouchStart: this.onAudioReload}
                    : {onClick: this.onAudioReload})}
                key="reload-btn"
                title="FiRefreshCcw"
            >
        <FiRefreshCcw/>
      </span>
        ) : (
            undefined
        );

        //播放模式
        const PlayModeComponent = showPlayMode ? (
            <span
                className={classNames("group loop-btn")}
                {...(IS_MOBILE
                    ? {onTouchStart: this.togglePlayMode}
                    : {onClick: this.togglePlayMode})}
                key="play-mode-btn"
                title={this.PLAY_MODE[currentPlayMode]["value"]}
            >
        {this.renderPlayModeIcon(currentPlayMode)}
      </span>
        ) : (
            undefined
        );

        const miniProcessBarR = isMobile ? 30 : 40;

        const AudioController = (
            <div
                className={classNames("react-jinke-music-player")}
                key="react-jinke-music-player"
                style={defaultPosition}
            >
                <div className={classNames("music-player")} key="music-player">
                    {showMiniProcessBar ? (
                        <CircleProcessBar
                            progress={currentTime / duration}
                            r={miniProcessBarR}
                        />
                    ) : (
                        undefined
                    )}
                    <div
                        key="controller"
                        id={this.targetId}
                        className="scale music-player-controller"
                        {...isShowMiniModeCover}
                    >
                        {loading ? (
                            <Load/>
                        ) : (
                            <Fragment>
                <span className="controller-title" key="controller-title">
                  {controllerTitle}
                </span>
                                <div key="setting" className="music-player-controller-setting">
                                    {toggle ? closeText : openText}
                                </div>
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>
        );

        return (
            <div
                className={classNames(
                    "react-jinke-music-player-main",
                    {
                        "light-theme": theme === this.lightThemeName,
                        "dark-theme": theme === this.darkThemeName
                    },
                    className
                )}
                style={style}
            >
                {toggle && isMobile ? (
                    <AudioPlayerMobile
                        playing={playing}
                        loading={loading}
                        pause={pause}
                        name={name}
                        singer={singer}
                        cover={cover}
                        themeSwitch={ThemeSwitchComponent}
                        duration={_duration}
                        currentTime={_currentTime}
                        progressBar={ProgressBar}
                        onPlay={this.onPlay}
                        currentPlayModeName={this.PLAY_MODE[currentPlayMode]["value"]}
                        playMode={PlayModeComponent}
                        audioNextPlay={this.audioNextPlay}
                        audioPrevPlay={this.audioPrevPlay}
                        playListsIcon={<FaIndent/>}
                        reloadIcon={ReloadComponent}
                        downloadIcon={DownloadComponent}
                        nextAudioIcon={<FiSkipForward/>}
                        prevAudioIcon={<FiSkipBack/>}
                        playIcon={<AnimatePlayIcon/>}
                        pauseIcon={<AnimatePauseIcon/>}
                        closeIcon={<IoMdClose/>}
                        loadingIcon={<Load/>}
                        playModeTipVisible={playModeTipVisible}
                        openAudioListsPanel={this.openAudioListsPanel}
                        onClose={this.onHidePanel}
                        extendsContent={extendsContent}
                        glassBg={glassBg}
                    />
                ) : (
                    undefined
                )}

                {toggle ? (
                    undefined
                ) : drag ? (
                    <Draggable
                        bounds={bounds}
                        position={{x: moveX, y: moveY}}
                        onDrag={this.controllerMouseMove}
                        onStop={this.controllerMouseUp}
                        onStart={this.controllerMouseMove}
                    >
                        {AudioController}
                    </Draggable>
                ) : (
                    <Fragment>{AudioController}</Fragment>
                )}
                {toggle ? (
                    isMobile ? (
                        undefined
                    ) : (
                        <div
                            key="panel"
                            className={classNames("music-player-panel", "translate", {
                                "glass-bg": glassBg
                            })}
                        >
                            <section className="panel-content" key="panel-content">
                                <div
                                    className={classNames("img-content", "img-rotate", {
                                        "img-rotate-pause": pause || !playing || !cover
                                    })}
                                    style={{backgroundImage: `url(${cover})`}}
                                    key="img-content"
                                />
                                <div
                                    className="progress-bar-content"
                                    key="progress-bar-content"
                                >
                  <span className="audio-title">
                    {name} {singer ? `- ${singer}` : ""}
                  </span>
                                    <section className="audio-main">
                    <span key="current-time" className="current-time">
                      {loading ? "--" : _currentTime}
                    </span>
                                        <div className="progress-bar" key="progress-bar">
                                            {showProgressLoadBar ? (
                                                <div
                                                    className="progress-load-bar"
                                                    key="progress-load-bar"
                                                    style={{width: `${Math.min(loadProgress, 100)}%`}}
                                                />
                                            ) : (
                                                undefined
                                            )}

                                            {ProgressBar}
                                        </div>
                                        <span key="duration" className="duration">
                      {loading ? "--" : _duration}
                    </span>
                                    </section>
                                </div>
                                <div className="player-content" key="player-content">
                                    {/*播放按钮*/}
                                    {loading ? (
                                        <span>
                      <Load/>
                    </span>
                                    ) : showPlay ? (
                                        <span className="group">
                      <span
                          className="group prev-audio"
                          title="Previous track"
                          {...(IS_MOBILE
                              ? {onTouchStart: this.audioPrevPlay}
                              : {onClick: this.audioPrevPlay})}
                      >
                        <FiSkipBack/>
                      </span>
                      <span
                          className="group play-btn"
                          key="play-btn"
                          ref={node => (this.playBtn = node)}
                          {...(IS_MOBILE
                              ? {onTouchStart: this.onPlay}
                              : {onClick: this.onPlay})}
                          title={playing ? "Click to pause" : "Click to play"}
                      >
                        {playing ? (
                            <span>
                            <AnimatePauseIcon/>
                          </span>
                        ) : (
                            <span>
                            <AnimatePlayIcon/>
                          </span>
                        )}
                      </span>
                      <span
                          className="group next-audio"
                          title="Next track"
                          {...(IS_MOBILE
                              ? {onTouchStart: this.audioNextPlay}
                              : {onClick: this.audioNextPlay})}
                      >
                        <FiSkipForward/>
                      </span>
                    </span>
                                    ) : (
                                        undefined
                                    )}

                                    {/*重播*/}
                                    {ReloadComponent}
                                    {/*下载歌曲*/}
                                    {DownloadComponent}
                                    {/* 主题选择 */}
                                    {ThemeSwitchComponent}

                                    {/* 自定义扩展按钮 */}
                                    {extendsContent && extendsContent.length >= 1
                                        ? extendsContent.map((content, i) => content)
                                        : undefined}

                                    {/*音量控制*/}
                                    <span
                                        className="group play-sounds"
                                        key="play-sound"
                                        title="Volume"
                                    >
                    {isMute ? (
                        <span
                            className="sounds-icon"
                            {...(IS_MOBILE
                                ? {onTouchStart: this.onSound}
                                : {onClick: this.onSound})}
                        >
                        <FiVolume/>
                      </span>
                    ) : (
                        <span
                            className="sounds-icon"
                            {...(IS_MOBILE
                                ? {onTouchStart: this.onMute}
                                : {onClick: this.onMute})}
                        >
                        <FiVolume1/>
                      </span>
                    )}
                                        <Slider
                                            max={1}
                                            value={soundValue}
                                            onChange={this.audioSoundChange}
                                            className="sound-operation"
                                            {...sliderBaseOptions}
                                        />
                  </span>

                                    {/*播放模式*/}
                                    {PlayModeComponent}

                                    {/*播放列表按钮*/}
                                    <span
                                        className="group audio-lists-btn"
                                        key="audio-lists-btn"
                                        title="play lists"
                                        {...(IS_MOBILE
                                            ? {onTouchStart: this.openAudioListsPanel}
                                            : {onClick: this.openAudioListsPanel})}
                                    >
                    <span className="audio-lists-icon">
                      <FaIndent/>
                    </span>
                    <span className="audio-lists-num">{audioLists.length}</span>
                  </span>

                                    {/*收起面板*/}
                                    {toggleMode ? (
                                        <span
                                            className="group hide-panel"
                                            key="hide-panel-btn"
                                            {...(IS_MOBILE
                                                ? {onTouchStart: this.onHidePanel}
                                                : {onClick: this.onHidePanel})}
                                        >
                      <FaMinusSquare/>
                    </span>
                                    ) : (
                                        undefined
                                    )}
                                </div>
                            </section>
                            {/* 播放模式提示框 */}
                            <PlayModel
                                visible={playModelNameVisible}
                                value={currentPlayModeName}
                            />
                        </div>
                    )
                ) : (
                    undefined
                )}
                {/* 播放列表面板 */}
                <AudioListsPanel
                    playId={playId}
                    pause={pause}
                    loading={loading ? <Load/> : undefined}
                    visible={audioListsPanelVisible}
                    audioLists={audioLists}
                    notContentText={notContentText}
                    onPlay={this.audioListsPlay}
                    onCancel={this.closeAudioListsPanel}
                    playIcon={<AnimatePlayIcon/>}
                    pauseIcon={<AnimatePauseIcon/>}
                    closeIcon={<IoMdClose/>}
                    panelTitle={panelTitle}
                    isMobile={IS_MOBILE}
                    panelToggleAnimate={panelToggleAnimate}
                    glassBg={glassBg}
                    cover={cover}
                    remove={remove}
                    deleteIcon={<MdDeleteForever/>}
                    onDelete={this.deleteAudioLists}
                    removeId={removeId}
                    audioListsDragEnd={this.audioListsDragEnd}
                />
                <audio
                    key="audio"
                    className="music-player-audio"
                    {...preloadState}
                    src={musicSrc}
                    ref={node => (this.audio = node)}
                />
            </div>
        );
    }

    //播放模式切换
    togglePlayMode = () => {
        let index = this._PLAY_MODE_.findIndex(
            ({key}) => key === this.state.playMode
        );
        const playMode =
            index === this._PLAY_MODE_LENGTH_ - 1
                ? this._PLAY_MODE_[0]["key"]
                : this._PLAY_MODE_[++index]["key"];
        this.setState({
            playMode,
            playModelNameVisible: true,
            playModeTipVisible: true
        });
        this.props.onPlayModeChange &&
        this.props.onPlayModeChange(this.PLAY_MODE[playMode]);

        clearTimeout(this.playModelTimer);
        this.playModelTimer = setTimeout(() => {
            this.setState({playModelNameVisible: false, playModeTipVisible: false});
        }, this.props.playModeShowTime);
    };
    //渲染播放模式 对应按钮
    renderPlayModeIcon = playMode => {
        let IconNode = "";
        const animateName = "react-jinke-music-player-mode-icon";
        switch (playMode) {
            case this.PLAY_MODE["order"]["key"]:
                IconNode = <IoMdReorder className={animateName}/>;
                break;
            case this.PLAY_MODE["orderLoop"]["key"]:
                IconNode = <TiArrowRepeat className={animateName}/>;
                break;
            case this.PLAY_MODE["singleLoop"]["key"]:
                IconNode = <TiArrowLoop className={animateName}/>;
                break;
            case this.PLAY_MODE["shufflePlay"]["key"]:
                IconNode = <FiShuffle className={animateName}/>;
                break;
            default:
                IconNode = <IoMdReorder className={animateName}/>;
        }
        return IconNode;
    };
    /**
     * 音乐列表面板选择歌曲
     * 上一首 下一首
     * 音乐结束
     * 通用方法
     * @tip: ignore 如果 为 true playId相同则不暂停 可是重新播放 适用于 随机播放 重新播放等逻辑
     */
    audioListsPlay = (playId, ignore = false) => {
        const {playId: currentPlayId, pause, playing, audioLists} = this.state;

        if (Array.isArray(audioLists) && audioLists.length === 0) {
            /*eslint-disable no-console*/
            return console.warn("Your playlist has no songs. and cannot play !");
            /*eslint-disable no-console*/
        }
        //如果点击当前项 就暂停 或者播放
        if (playId === currentPlayId && !ignore) {
            this.setState({pause: !pause, playing: !playing});
            return pause ? this.audio.play() : this._pauseAudio();
        }

        const {name, cover, musicSrc, singer} = audioLists.find(
            audio => audio.id === playId
        );

        const loadAudio = musicSrc => {
            this.setState(
                {
                    name,
                    cover,
                    musicSrc,
                    singer,
                    playId,
                    currentTime: 0,
                    duration: 0,
                    playing: false,
                    loading: true,
                    loadProgress: 0
                },
                () => {
                    this.audio.load();
                }
            );
            this.props.onAudioPlayTrackChange &&
            this.props.onAudioPlayTrackChange(
                playId,
                audioLists,
                this.getBaseAudioInfo()
            );
        };

        switch (typeof musicSrc) {
            case "function":
                musicSrc().then(originMusicSrc => {
                    loadAudio(originMusicSrc);
                }, this.onAudioLoadError);
                break;
            default:
                loadAudio(musicSrc);
        }
    };
    resetAudioStatus = () => {
        this.audio.pause();
        this.setState({
            currentTime: 0,
            duration: 0,
            loading: false,
            playing: false,
            pause: true
        });
        this.initPlayInfo([]);
    };
    deleteAudioLists = audioId => e => {
        e.stopPropagation();
        //如果不 传 id  删除全部
        const {audioLists, playId} = this.state;
        if (audioLists.length < 1) {
            return;
        }
        const newAudioLists = [...audioLists].filter(audio => audio.id !== audioId);
        if (!audioId) {
            this.resetAudioStatus();
        } else {
            //触发删除动画,等动画结束 删除列表
            this.setState({removeId: audioId});
            setTimeout(() => {
                this.setState(
                    {
                        audioLists: newAudioLists,
                        removeId: -1
                    },
                    () => {
                        if (newAudioLists.length <= 0) {
                            return this.resetAudioStatus();
                        }
                        // 如果删除的是当前正在播放的 顺延下一首播放
                        if (audioId === playId) {
                            this.handlePlay(this.PLAY_MODE["orderLoop"]["key"]);
                        }
                    }
                );
            }, this.audioListRemoveAnimateTime);
        }

        this.props.onAudioListsChange &&
        this.props.onAudioListsChange(
            playId,
            newAudioLists,
            this.getBaseAudioInfo()
        );
    };
    openAudioListsPanel = () => {
        this.setState(({audioListsPanelVisible, initAnimate}) => ({
            initAnimate: true,
            audioListsPanelVisible: !audioListsPanelVisible
        }));
        this.props.onAudioListsPanelChange &&
        this.props.onAudioListsPanelChange(!this.state.audioListsPanelVisible);
    };
    closeAudioListsPanel = e => {
        e.stopPropagation();
        this.setState({audioListsPanelVisible: false});
        this.props.onAudioListsPanelChange &&
        this.props.onAudioListsPanelChange(false);
    };
    themeChange = isLight => {
        const theme = isLight ? this.lightThemeName : this.darkThemeName;
        this.setState({
            theme
        });
        this.props.onThemeChange && this.props.onThemeChange(theme);
    };
    onAudioDownload = () => {
        const {name, musicSrc} = this.state;
        if (name && musicSrc) {
            this.downloadNode = document.createElement("a");
            this.downloadNode.setAttribute("download", name);
            this.downloadNode.setAttribute("name", name);
            this.downloadNode.setAttribute("href", musicSrc);
            this.downloadNode.click();

            this.props.onAudioDownload &&
            this.props.onAudioDownload(this.getBaseAudioInfo());
        }
    };
    controllerMouseMove = (e, {deltaX, deltaY}) => {
        const isMove =
            Math.abs(deltaX) >= this.openPanelPeriphery ||
            Math.abs(deltaY) >= this.openPanelPeriphery;
        this.setState({
            isMove
        });
    };
    controllerMouseUp = (e, {x, y}) => {
        if (!this.state.isMove) {
            if (this.state.isNeedMobileHack) {
                this.loadAndPlayAudio();
                this.setState({isNeedMobileHack: false});
            }
            this.openPanel();
        }
        this.setState({moveX: x, moveY: y});
        return false;
    };
    controllerMouseOut = e => {
        e.preventDefault();
        this.isDrag = false;
    };
    onHandleProgress = value => {
        this.audio.currentTime = value;
    };
    onSound = () => {
        this.setAudioVolume(this.state.currentAudioVolume);
    };
    setAudioVolume = value => {
        this.audio.volume = value;
        this.setState({
            currentAudioVolume: value,
            soundValue: value
        });
    };
    stopAll = target => {
        target.stopPropagation();
        target.preventDefault();
    };
    getBoundingClientRect = ele => {
        const {left, top} = ele.getBoundingClientRect();
        return {
            left,
            top
        };
    };
    //循环播放
    audioLoop = () => {
        this.setState(({isLoop}) => {
            return {
                isLoop: !isLoop
            };
        });
    };
    //重新播放
    onAudioReload = () => {
        this.handlePlay(this.PLAY_MODE["singleLoop"]["key"]);
        this.props.onAudioReload &&
        this.props.onAudioReload(this.getBaseAudioInfo());
    };
    openPanel = () => {
        if (this.props.toggleMode) {
            this.setState({toggle: true});
            this.props.onModeChange &&
            this.props.onModeChange(this.toggleModeName.full);
        }
    };
    //收起播放器
    onHidePanel = e => {
        this.setState({toggle: false, audioListsPanelVisible: false});
        this.props.onModeChange &&
        this.props.onModeChange(this.toggleModeName.mini);
    };

    //返回给使用者的 音乐信息
    getBaseAudioInfo() {
        const {cover, name, musicSrc, soundValue} = this.state;
        const {
            currentTime,
            duration,
            muted,
            networkState,
            readyState,
            played,
            paused,
            ended,
            startDate
        } = this.audio;
        return {
            cover,
            name,
            musicSrc,
            volume: soundValue,
            currentTime,
            duration,
            muted,
            networkState,
            readyState,
            played,
            paused,
            ended,
            startDate
        };
    }

    //播放
    onPlay = () => {
        if (this.state.audioLists.length >= 1) {
            if (this.state.playing) {
                this._pauseAudio();
            } else {
                this.loadAndPlayAudio();
                this.props.onAudioPlay &&
                this.props.onAudioPlay(this.getBaseAudioInfo());
            }
        }
    };

    canPlay = () => {
        this.setAudioLength();
        this.loadAndPlayAudio();
        this.setState({
            loading: false,
            playing: true
        });
    };
    //暂停
    _pauseAudio = () => {
        this.audio.pause();
        this.setState({playing: false, pause: true});
    };
    onPauseAudio = () => {
        this.props.onAudioPause && this.props.onAudioPause(this.getBaseAudioInfo());
    };
    //加载音频
    loadAndPlayAudio = () => {
        const {autoPlay, remember} = this.props;
        const {isInitAutoplay, isInitRemember, loadProgress} = this.state;
        const {networkState} = this.audio;
        const maxLoadProgress = 100;
        this.setState({loading: true});
        if (loadProgress < maxLoadProgress) {
            this.setState({loadProgress: loadProgress + 1});
        }
        if (
            // readyState === this.READY_SUCCESS_STATE &&
            networkState !== this.NETWORK_STATE.NETWORK_NO_SOURCE
        ) {
            const {pause} = this.getLastPlayStatus();
            const isLastPause = remember && !isInitRemember && pause;
            const canPlay = isInitAutoplay || autoPlay === true;
            this.setState(
                {
                    playing: remember ? !isLastPause : canPlay,
                    loading: false,
                    pause: remember ? isLastPause : !canPlay,
                    loadProgress: maxLoadProgress
                },
                () => {
                    if (remember ? !isLastPause : canPlay) {
                        // fuck Safari is need muted :(
                        // this.audio.muted = true
                        this.audio.play();
                    }
                    this.setState({isInitAutoplay: true, isInitRemember: true});
                }
            );
        } else {
            this.onAudioLoadError();
        }
    };
    //设置音频长度
    setAudioLength = () => {
        this.setState({
            duration: this.audio.duration
        });
    };
    onAudioLoadError = e => {
        const {playMode, audioLists, playId} = this.state;
        if (audioLists.length >= 1) {
            //如果当前音乐加载出错 尝试播放下一首
            const {loadAudioErrorPlayNext} = this.props;
            if (loadAudioErrorPlayNext && playId < audioLists.length - 1) {
                this.handlePlay(playMode);
            }

            const info = this.getBaseAudioInfo();
            this.props.onAudioLoadError &&
            this.props.onAudioLoadError({
                ...e,
                audioInfo: info,
                errMsg: this.audio.error || null
            });
        }
    };
    //isNext true 下一首  false
    /*eslint-disable no-unused-vars */
    handlePlay = (playMode, isNext = true) => {
        let IconNode = "";
        let {playId, audioLists} = this.state;
        const audioListsLen = audioLists.length;
        const currentPlayIndex = audioLists.findIndex(audio => audio.id === playId);
        switch (playMode) {
            //顺序播放
            case this.PLAY_MODE["order"]["key"]:
                IconNode = <IoMdReorder/>;
                // 拖拽排序后 或者 正常播放 到最后一首歌 就暂停
                if (currentPlayIndex === audioListsLen - 1) return this._pauseAudio();
                this.audioListsPlay(
                    isNext
                        ? audioLists[currentPlayIndex + 1].id
                        : audioLists[currentPlayIndex - 1].id
                );
                break;

            //列表循环
            case this.PLAY_MODE["orderLoop"]["key"]:
                IconNode = <TiArrowRepeat/>;
                if (isNext) {
                    if (currentPlayIndex === audioListsLen - 1) {
                        return this.audioListsPlay(audioLists[0].id);
                    }
                    this.audioListsPlay(audioLists[currentPlayIndex + 1].id);
                } else {
                    if (currentPlayIndex === 0) {
                        return this.audioListsPlay(audioLists[audioListsLen - 1].id);
                    }
                    this.audioListsPlay(audioLists[currentPlayIndex - 1].id);
                }
                break;

            //单曲循环
            case this.PLAY_MODE["singleLoop"]["key"]:
                IconNode = <TiArrowLoop/>;
                this.audio.currentTime = 0;
                this.audioListsPlay(playId, true);
                break;

            //随机播放
            case this.PLAY_MODE["shufflePlay"]["key"]: {
                IconNode = <FiShuffle/>;
                let randomIndex = createRandomNum(0, audioListsLen - 1);
                const randomPlayId = (audioLists[randomIndex] || {}).id;
                this.audioListsPlay(randomPlayId, true);
            }
                break;
            default:
                IconNode = <IoMdReorder/>;
        }
    };
    /*eslint-disable no-unused-vars */
    //音频播放结束
    audioEnd = () => {
        this.props.onAudioEnded && this.props.onAudioEnded(this.getBaseAudioInfo());
        this.handlePlay(this.state.playMode);
    };
    /**
     * 上一首 下一首 通用方法
     * 除随机播放之外 都以  点击了上一首或者下一首 则以列表循环的方式 顺序放下一首歌
     * 参考常规播放器的逻辑
     */
    audioPrevAndNextBasePlayHandle = (isNext = true) => {
        const {playMode} = this.state;
        let _playMode = "";
        switch (playMode) {
            case this.PLAY_MODE["shufflePlay"]["key"]:
                _playMode = playMode;
                break;
            default:
                _playMode = this.PLAY_MODE["orderLoop"]["key"];
                break;
        }
        this.handlePlay(_playMode, isNext);
    };
    //上一首
    audioPrevPlay = () => {
        this.audioPrevAndNextBasePlayHandle(false);
    };
    //下一首
    audioNextPlay = () => {
        this.audioPrevAndNextBasePlayHandle(true);
    };
    //播放进度更新
    audioTimeUpdate = () => {
        const currentTime = this.audio.currentTime;
        this.setState({currentTime});
        if (this.props.remember) {
            this.saveLastPlayStatus();
        }
        this.props.onAudioProgress &&
        this.props.onAudioProgress(this.getBaseAudioInfo());
    };
    //音量改变
    audioSoundChange = value => {
        this.setAudioVolume(value);
    };
    onAudioVolumeChange = () => {
        this.setState({isMute: this.audio.volume <= 0});
        this.props.onAudioVolumeChange &&
        this.props.onAudioVolumeChange(this.audio.volume);
    };
    onAudioPlay = () => {
        this.setState({playing: true, loading: false});
        this.props.onAudioPlay && this.props.onAudioPlay(this.getBaseAudioInfo());
    };
    //进度条跳跃
    onAudioSeeked = () => {
        if (this.state.audioLists.length >= 1) {
            this.loadAndPlayAudio();
            this.props.onAudioSeeked &&
            this.props.onAudioSeeked(this.getBaseAudioInfo());
        }
    };
    //静音
    onMute = () => {
        this.setState(
            {
                isMute: true,
                soundValue: 0,
                currentAudioVolume: this.audio.volume
            },
            () => {
                this.audio.volume = 0;
            }
        );
    };
    //加载中断
    onAudioAbort = e => {
        const audioInfo = this.getBaseAudioInfo();
        const _err = Object.assign({}, e, audioInfo);
        this.props.onAudioAbort && this.props.onAudioAbort(_err);
        this.audio.pause();
        this.audio.play();
    };
    //切换播放器模式
    toggleMode = mode => {
        if (mode === this.toggleModeName["full"]) {
            this.setState({toggle: true});
        }
    };
    //列表拖拽排序
    audioListsDragEnd = (fromIndex, toIndex) => {
        const {playId, audioLists} = this.state;
        const _audioLists = [...audioLists];
        const item = _audioLists.splice(fromIndex, 1)[0];
        _audioLists.splice(toIndex, 0, item);

        //如果拖动正在播放的歌曲 播放Id 等于 拖动后的index
        let _playId = fromIndex === playId ? toIndex : playId;

        this.setState({audioLists: _audioLists, playId: _playId});

        this.props.onAudioListsDragEnd &&
        this.props.onAudioListsDragEnd(fromIndex, toIndex);

        this.props.onAudioListsChange &&
        this.props.onAudioListsChange(
            _playId,
            _audioLists,
            this.getBaseAudioInfo()
        );
    };
    saveLastPlayStatus = () => {
        const {
            currentTime,
            playId,
            duration,
            theme,
            soundValue,
            playMode,
            name,
            cover,
            singer,
            musicSrc,
            pause
        } = this.state;
        const lastPlayStatus = JSON.stringify({
            currentTime,
            playId,
            duration,
            theme,
            playMode,
            soundValue,
            name,
            cover,
            singer,
            musicSrc,
            pause
        });
        localStorage.setItem("lastPlayStatus", lastPlayStatus);
    };
    getLastPlayStatus = () => {
        const {theme, defaultPlayMode, defaultPlayIndex} = this.props;

        let status = {
            currentTime: 0,
            duration: 0,
            playMode: defaultPlayMode,
            name: "",
            cover: "",
            singer: "",
            musicSrc: "",
            playId: this.getDefaultPlayId(),
            theme,
            pause: false
        };
        try {
            return JSON.parse(localStorage.getItem("lastPlayStatus")) || status;
        } catch (error) {
            return status;
        }
    };
    bindMobileAutoPlayEvents = () => {
        document.addEventListener(
            "touchstart",
            () => {
                this.audio.load();
                this.audio.pause();
                this.audio.play();
            },
            {once: true}
        );
        //监听微信准备就绪事件
        document.addEventListener("WeixinJSBridgeReady", () => {
            this.audio.load();
            this.audio.pause();
            this.audio.play();
        });
    };
    bindSafariAutoPlayEvents = () => {
        document.addEventListener(
            "click",
            () => {
                this.audio.load();
                this.audio.pause();
                this.audio.play();
            },
            {once: true}
        );
    };
    unBindEvents = (...options) => {
        this.bindEvents(...options);
    };
    /**
     * 绑定 audio 标签 事件
     */
    bindEvents = (
        target = this.audio,
        eventsNames = {
            waiting: this.loadAndPlayAudio,
            canplay: this.canPlay,
            error: this.onAudioLoadError,
            ended: this.audioEnd,
            seeked: this.onAudioSeeked,
            pause: this.onPauseAudio,
            play: this.onAudioPlay,
            timeupdate: this.audioTimeUpdate,
            volumechange: this.onAudioVolumeChange,
            stalled: this.onAudioLoadError, //当浏览器尝试获取媒体数据，但数据不可用时
            abort: this.onAudioAbort
        },
        bind = true
    ) => {
        const {once} = this.props;
        for (let name in eventsNames) {
            const _events = eventsNames[name];
            bind
                ? target.addEventListener(name, _events, {
                    once: !!(once && name === "play")
                })
                : target.removeEventListener(name, _events);
        }
    };
    getPlayInfo = (audioLists = []) => {
        const newAudioLists = audioLists.filter(audio => !audio["id"]);
        const lastAudioLists = audioLists.filter(audio => audio["id"]);
        const _audioLists = [
            ...lastAudioLists,
            ...newAudioLists.map(info => {
                return {
                    ...info,
                    id: uuId()
                };
            })
        ];
        const playIndex = Math.max(
            0,
            Math.min(_audioLists.length, this.props.defaultPlayIndex)
        );
        const playId = this.state.playId || _audioLists[playIndex].id;
        const {name = "", cover = "", singer = "", musicSrc = ""} =
        _audioLists.find(({id}) => id === playId) || {};
        return {name, cover, singer, musicSrc, audioLists: _audioLists, playId};
    };
    initPlayInfo = (audioLists, cb) => {
        const info = this.getPlayInfo(audioLists);

        switch (typeof info.musicSrc) {
            case "function":
                info.musicSrc().then(originMusicSrc => {
                    this.setState({...info, musicSrc: originMusicSrc}, cb);
                }, this.onAudioLoadError);
                break;
            default:
                this.setState(info, cb);
        }
    };
    listenerIsMobile = ({matches}) => {
        this.setState({
            isMobile: !!matches
        });
    };
    addMobileListener = () => {
        this.media = window.matchMedia(
            "(max-width: 768px) and (orientation : portrait)"
        );
        this.media.addListener(this.listenerIsMobile);
    };
    setDefaultAudioVolume = () => {
        const {defaultVolume, remember} = this.props;
        //音量 [0-100]
        this.defaultVolume = Math.max(0, Math.min(defaultVolume, 100)) / 100;
        const {soundValue = this.defaultVolume} = this.getLastPlayStatus();
        this.setAudioVolume(remember ? soundValue : this.defaultVolume);
    };
    getDefaultPlayId = (audioLists = this.props.audioLists) => {
        const playIndex = Math.max(
            0,
            Math.min(audioLists.length, this.props.defaultPlayIndex)
        );
        return audioLists[playIndex].id;
    };

    //当父组件 更新 props 时 如 audioLists 改变 更新播放信息
    componentWillReceiveProps({audioLists, playIndex}) {
        if (!arrayEqual(audioLists)(this.props.audioLists)) {
            const newAudioLists = [
                ...this.state.audioLists,
                ...audioLists.filter(
                    (audio, i) =>
                        this.state.audioLists.findIndex(
                            v => v.musicSrc === audio.musicSrc
                        ) === -1
                )
            ];
            this.initPlayInfo(newAudioLists);
            this.bindEvents(this.audio);
            this.props.onAudioListsChange &&
            this.props.onAudioListsChange(
                this.state.playId,
                audioLists,
                this.getBaseAudioInfo()
            );
        } else {
            // 播放索引 改变
            const currentPlayIndex = this.state.audioLists.findIndex(
                audio => audio.id === this.state.playId
            );
            if (currentPlayIndex !== playIndex) {
                const _playIndex = Math.max(
                    0,
                    Math.min(this.state.audioLists.length, playIndex)
                );
                this.audioListsPlay(this.state.audioLists[_playIndex].id, true);
            }
        }
    }

    //合并state 更新初始值
    componentWillMount() {
        const {
            mode,
            audioLists,
            defaultPlayMode,
            remember,
            theme,
            defaultPlayIndex
        } = this.props;

        //切换 'mini' 或者 'full' 模式
        this.toggleMode(mode);

        if (audioLists.length >= 1) {
            const info = this.getPlayInfo(audioLists);
            const lastPlayStatus = remember
                ? this.getLastPlayStatus(defaultPlayIndex)
                : {playMode: defaultPlayMode, theme};

            switch (typeof info.musicSrc) {
                case "function":
                    info.musicSrc().then(val => {
                        this.setState({
                            ...info,
                            musicSrc: val,
                            ...lastPlayStatus
                        });
                    }, this.onAudioLoadError);
                    break;
                default:
                    this.setState({
                        ...info,
                        ...lastPlayStatus
                    });
            }
        }
    }

    componentWillUnmount() {
        this.unBindEvents(this.audio, undefined, false);
        this.media.removeListener(this.listenerIsMobile);
        this.media = undefined;
    }

    componentDidMount() {
        this.addMobileListener();
        this.setDefaultAudioVolume();
        if (this.props.audioLists.length >= 1) {
            this.bindEvents(this.audio);
            if (IS_MOBILE) {
                this.bindMobileAutoPlayEvents();
            }
            if (!IS_MOBILE && isSafari()) {
                this.bindSafariAutoPlayEvents();
            }
        }
    }
}
