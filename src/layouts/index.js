import styles from './index.css';
import { Layout, Breadcrumb } from 'antd';
import React, { Component } from 'react';

import MenuConfig from './../config/menuConfig';
import MenuComponent from './menu';

const { Header, Content, Footer, Sider } = Layout;

// 约定 src/layouts/index.js 为全局路由，返回一个 React 组件，通过 props.children 渲染子组件。

export default class BasicLayout extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className={styles.logo} style={{ textAlign: 'center', lineHeight: '32px' }}>
            <span style={{ fontSize: '18px', color: '#fff' }}>
              {this.state.collapsed ? 'U-R' : 'Umi-React'}
            </span>
          </div>
          <MenuComponent menu={MenuConfig} />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>{/* <HeaderComponent /> */}</Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                background: '#fff',
                minHeight: 360,
              }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
