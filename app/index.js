var React = require('react');
var ReactDom = require('react-dom'); // to render our component to DOM
require('./index.css'); // will be inlcuded inside the app when everything bundles
var App = require('./components/App');

ReactDom.render(
    <App/>,
    document.getElementById('app')
);