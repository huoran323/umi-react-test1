import { connect } from 'dva';
import Login from '@components/Login';
import { message, Row, Col } from 'antd';
import logo from '../../assets/logo_blue_1024.png';

import styles from './index.less';

const LoginIndex = ({ dispatch }) => {
  const handleSubmit = (errors, values) => {
    for (const name in values) {
      if (values[name] === undefined) {
        message.error('用户名或密码错误');
      }
    }
    dispatch({
      type: 'login/loginRequest',
      payload: {
        ...values,
      },
    });
  };
  return (
    <div className={styles.content}>
      <Row>
        <Col span={24} className={styles.logo}>
          <img alt="logo" src={logo} />
        </Col>
      </Row>
      <h2 className={styles.title}>通用管理系统</h2>
      <Login onSubmit={handleSubmit} />
    </div>
  );
};

export default connect(login => {
  return {
    ...login,
  };
})(LoginIndex);
//与下面的写法是一样的

/**
 * 
 * 【connect 方法返回的也是一个 React 组件，通常称为容器组件。因为它是原始 UI 组件的容器，即在外面包了一层 State。
    connect 方法传入的第一个参数是 mapStateToProps 函数，该函数需要返回一个对象，用于建立 State 到 Props 的映射关系。】
 */
// function mapStateToProps({ login, loading }) {
//   return {
//     ...login,
//     loading: loading.global,
//   };
// }

// export default connect(mapStateToProps)(LoginIndex);
