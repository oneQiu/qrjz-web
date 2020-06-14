import React, { Component, Suspense, lazy, Fragment } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

// lasy路由懒加载 配合Suspense实现 并且使用fallback显示加载状态
const Index = lazy(() => import("pages/index/index"));
const Login = lazy(() => import("pages/login/index"));

export default class Router extends Component {
	render() {
		return (
			<Suspense fallback={<div>记载中...</div>}>
				<HashRouter>
					<Switch>
						<Route
							render={() => (
								<Fragment>
									<Index />
									<Route path="/login" component={Login}></Route>
								</Fragment>
							)}
						/>
					</Switch>
				</HashRouter>
			</Suspense>
		);
	}
}
