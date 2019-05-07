import React, {Component, Fragment} from 'react';
import Rigth from "../Rigth";
import Home from "../../Home";
import { BrowserRouter as Router, Route, Link, browserHistory, withRouter} from "react-router-dom";
import Book from "../../Book";
// import { createBrowserHistory } from 'history';


class Main extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('MainWillReceiveProps: '+ nextProps)
       // this.props.history.push(nextProps)
        console.log(this.props.history.location.pathname)
        if (this.props.history.location !== this.props.location) {
            let params = this.props.history.location.pathname.split('/')
            console.log('MainWillReceiveProps' + params)
            // const [ , courseName, episodeName] = params
            // this.props.fetchEpisode({courseName, episodeName})
        }
    }

    render() {

        return (
            <Fragment>
                {/*<Router history={history}>*/}
                    <div>
                        <Route exact path="/book" component={Book}/>
                        <Route exact path="/" component={Home}/>

                    </div>
                {/*</Router>*/}
                    {/*<Router>*/}
                    {/*    <div>*/}
                    {/*        <Route exact path="/" component={Home}/>*/}
                    {/*        <Route path="/book" component={Book}/>*/}
                    {/*    </div>*/}
                    {/*</Router>*/}
                    {/*<Router>*/}
                    {/*    /!*<Route exact path='/' component={Home} />*!/*/}
                    {/*    /!*<Route path='/book' exact component={Book}/>*!/*/}
                    {/*    <Route path="/" render={() => <div>Home</div>}/>*/}
                    {/*    <Route path="/book" render={() => <div>Home</div>}/>*/}
                    {/*</Router>*/}

            </Fragment>



    );

    }
    }
export default Main
{/*<div className="hbox hbox-auto-xs hbox-auto-sm">*/}
{/*    /!*<Router>*!/*/}
{/*    /!*    <div>*!/*/}
{/*    /!*        <Switch >*!/*/}
{/*    /!*            <Route   path='/book' component={Book} />*!/*/}
{/*    /!*            <Route  path='/' component={Home} />*!/*/}
{/*    /!*        </Switch>*!/*/}
{/*    /!*    </div>*!/*/}
{/*    /!*</Router>*!/*/}
{/*    /!*<Route path="/topics" component={Topics} />*!/*/}
{/*    /!*<Home/>*!/*/}
{/*    /!*<Route exact path='/' component={Home} />*!/*/}
{/*    /!*<Route path='/book' exact component={Book}/>*!/*/}
{/*    /!*<Route exact path="/" component={Home} />*!/*/}
{/*    /!*<Route path="/about" component={About} />*!/*/}
{/*    /!*<Route path="/topics" component={Topics} />*!/*/}
{/*    <Rigth/>*/}
{/*</div>*/}
{/*<main className="app-content-body ">*/}
{/*    <Router>*/}
{/*        /!*<div>*!/*/}
{/*        /!*    <Link to="/"></Link>*!/*/}
{/*        /!*    <Link to="/book"></Link>*!/*/}
{/*        /!*</div>*!/*/}
{/*        <div className="hbox hbox-auto-xs hbox-auto-sm">*/}
{/*            /!*<Router>*!/*/}
{/*            /!*    <div>*!/*/}
{/*            /!*        <Switch >*!/*/}
{/*            /!*            <Route   path='/book' component={Book} />*!/*/}
{/*            /!*            <Route  path='/' component={Home} />*!/*/}
{/*            /!*        </Switch>*!/*/}
{/*            /!*    </div>*!/*/}
{/*            /!*</Router>*!/*/}
{/*            /!*<Route path="/topics" component={Topics} />*!/*/}
{/*            /!*<Home/>*!/*/}
{/*            /!*<Route exact path='/' component={Home} />*!/*/}
{/*            /!*<Route path='/book' exact component={Book}/>*!/*/}
{/*            /!*<Route exact path="/" component={Home} />*!/*/}
{/*            /!*<Route path="/about" component={About} />*!/*/}
{/*            /!*<Route path="/topics" component={Topics} />*!/*/}
{/*            <Rigth/>*/}
{/*        </div>*/}
{/*    </Router>*/}
{/*</main>*/}
