import { Component } from 'react';
import { Layout } from 'antd';

import styles from './index.less';

const { Content, Footer } = Layout;

export default class BasicIndex extends Component {
  render() {
    const { children } = this.props;
    return (
      <Layout className={styles.container}>
        <Content className={styleMedia.content}>{children}</Content>
        <Footer />
      </Layout>
    );
  }
}
