import React, { Component } from "react";
import { Layout, Input, Button, Avatar } from "antd";
import { AudioOutlined, MailOutlined, HeartOutlined } from "@ant-design/icons";
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
	onCreateCard = () => {
		console.log(123);
	};
	render() {
		const { loading } = this.state;
		return (
			<div className="layout-headerWarp">
				<Search
					loading={loading}
					suffix={suffix}
					placeholder="Search"
					allowClear={true}
					onSearch={(value) => console.log(value)}
					className="layout-search"
				/>
				<div className="layout-header-right">
					<Button className="layout-createButton" onClick={this.onCreateCard}>
						Create New Card
					</Button>
					<MailOutlined className="header-icon" />
					<HeartOutlined className="header-icon" />
					<Avatar />
				</div>
			</div>
		);
	}
}
