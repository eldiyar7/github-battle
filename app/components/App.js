var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Popular = require('./Popular');


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/battle" component={Battle}/>
                    <Route path="/popular" component={Popular}/>
                </div>
            </Router>
        );
    }
}
module.exports = App;