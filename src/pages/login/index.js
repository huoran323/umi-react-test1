import { connect } from 'dva';
import { Login } from '@components/Login';
import { message, Row, Col } from 'antd';
import logo from '../../assets/logo_blue_1024.png';

import styles from './index.less';

const LoginIndex = ({ dispatch, loading }) => {
  return (
    <div className={styles.content}>
      <Row>
        <Col span={24} className={styles.logo}>
          <img alt="logo" src={logo} />
        </Col>
      </Row>
      <h2 className={styles.title}>通用管理系统</h2>
    </div>
  );
};

export default LoginIndex;
