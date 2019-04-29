import { connect } from 'dva';
import Login from '@components/Login';
import { message, Row, Col, Form } from 'antd';
import logo from '../../assets/logo_blue_1024.png';

import styles from './index.less';

const FormItem = Form.Item;

const LoginIndex = ({ dispatch, loading }) => {
  return (
    <div className={styles.content}>
      <Row>
        <Col span={24} className={styles.logo}>
          <img alt="logo" src={logo} />
        </Col>
      </Row>
      <h2 className={styles.title}>通用管理系统</h2>
      <Login />
    </div>
  );
};

export default connect()(LoginIndex);
