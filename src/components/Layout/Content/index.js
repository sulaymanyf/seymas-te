import React, {Component, Fragment} from 'react';
import Main from "../Main";
import {BrowserRouter as Router} from "react-router-dom";
import Rigth from "../Rigth";

class Content extends Component {

    render() {
        return (
            <Fragment>
                <div id="content" className="app-content">
                    <div id="loading" className="butterbar active hide">
                        <span className="bar"></span>
                    </div>
                    <a className="off-screen-toggle hide"></a>
                    <main className="app-content-body ">
                        <div className="hbox hbox-auto-xs hbox-auto-sm">
                            {/*<Router>*/}
                            {/*    <div>*/}
                            {/*        <Switch >*/}
                            {/*            <Route   path='/book' component={Book} />*/}
                            {/*            <Route  path='/' component={Home} />*/}
                            {/*        </Switch>*/}
                            {/*    </div>*/}
                            {/*</Router>*/}
                            {/*<Route path="/topics" component={Topics} />*/}
                            {/*<Home/>*/}
                            {/*<Route exact path='/' component={Home} />*/}
                            {/*<Route path='/book' exact component={Book}/>*/}
                            {/*<Route exact path="/" component={Home} />*/}
                            {/*<Route path="/about" component={About} />*/}
                            {/*<Route path="/topics" component={Topics} />*/}
                            <Main/>
                            <Rigth/>
                        </div>
                    </main>
                </div>
            </Fragment>
        );

    }
}

export default Content;
