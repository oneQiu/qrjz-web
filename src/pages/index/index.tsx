import React, { Component } from "react";
import { Layout } from "antd";

const { Header, Sider, Footer, Content } = Layout;
export default class Index extends Component {
	render() {
		return (
			<Layout className="">
				<Header>header</Header>
				<Layout>
					<Sider>left sidebar</Sider>
					<Content>main content</Content>
					<Sider>right sidebar</Sider>
				</Layout>
				<Footer>footer</Footer>
			</Layout>
		);
	}
}
