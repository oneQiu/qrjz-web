import React, { Component } from "react";
import { Layout } from "antd";
import "./index.less";

const { Header, Footer, Content, Sider } = Layout;

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
          <Header>1</Header>
          <Footer>2</Footer>
          <Content>3</Content>
        </Layout>
      </Layout>
    );
  }
}
