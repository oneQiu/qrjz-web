import React, { Component } from "react";
import { Layout, Input } from "antd";
import { render } from "react-dom";
import { AudioOutlined } from "@ant-design/icons";
import "./index.less";

const { Header, Footer, Content, Sider } = Layout;
const { Search } = Input;
const suffix = (
	<AudioOutlined
		style={{
			fontSize: 16,
			color: "#1890ff",
		}}
	/>
);

interface Iprops {}
interface Istate {
	/**
	 * 是否可收起
	 */
	collapsible: boolean;
}
export default class Index extends Component<Iprops, Istate> {
	constructor(props: Iprops) {
		super(props);
		this.state = {
			collapsible: true,
		};
	}
	render() {
		const { collapsible } = this.state;
		return (
			<Layout className="layout">
				<Sider className="layout-sider" theme="light" collapsible={collapsible}>
					4
				</Sider>
				<Layout>
					<Header className="layout-header">
						<HeaderInner />
					</Header>
					<Footer>2</Footer>
					<Content>3</Content>
				</Layout>
			</Layout>
		);
	}
}

interface HeaderProps {}
interface HeaderState {
	/**
	 * 搜索loading
	 */
	loading: boolean;
}
// 头部
class HeaderInner extends Component<HeaderProps, HeaderState> {
	constructor(props: HeaderProps) {
		super(props);
		this.state = {
			loading: false,
		};
	}
	render() {
		const { loading } = this.state;
		return (
			<div>
				<Search
					loading={loading}
					suffix={suffix}
					placeholder="Search"
					allowClear={true}
					onSearch={(value) => console.log(value)}
				/>
			</div>
		);
	}
}
