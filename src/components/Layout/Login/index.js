import React, {Component, Fragment} from "react";

class Login extends Component {

    render() {
        return (
            <Fragment>
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
            </Fragment>
        );

    }
}
export default Login;
