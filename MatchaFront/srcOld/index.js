import React		from 'react';
import ReactDOM 	from 'react-dom';
import CreateUsers 	from './CreateUsers/CreateUsers';
import createUsersNew 	from './CreateUsers/createUsersNew';
import HomeMatcha 	from './HomeMatcha/HomeMatcha';
import App			from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './Css/index.css';

ReactDOM.render((
<Router history={browserHistory}>
    <Route path="/" component={App}>
		<IndexRoute component={HomeMatcha} />
		<Route path="subscribe" component={CreateUsers} />
		<Route path="test" component={createUsersNew} />
	</Route>
</Router>
), document.getElementById('root'))
