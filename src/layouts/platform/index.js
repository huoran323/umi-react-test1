import styles from './index.css';
import { Layout, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';

import HeaderContent from './Header';
// import MenuConfig from './../config/menuConfig';
import MenuConfig from '@utils/menus.config';
import MenuComponent from './menu';

const { Header, Content, Footer, Sider } = Layout;

// 约定 src/layouts/index.js 为全局路由，返回一个 React 组件，通过 props.children 渲染子组件。

class Platform extends Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    //获取基本信息接口调用
    dispatch({
      type: 'global/getSysInfo',
    });
  }

  onCollapse = collapsed => {
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
          <Header style={{ background: '#fff', padding: 0, display: 'flex' }}>
            <div style={{ display: 'flex', flex: 'auto', justifyContent: 'flex-end' }}>
              <HeaderContent />
            </div>
          </Header>
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

function mapStateToProps({ global }) {
  return {
    ...global,
  };
}

export default connect(mapStateToProps)(Platform);

// Platform.propTypes = {
//   //用户信息
//   userInfo: PropTypes.object,
// };
