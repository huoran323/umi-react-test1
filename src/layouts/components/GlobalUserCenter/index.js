import { PureComponent } from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';

import styles from './index.less';

class UserCenter extends PureComponent {
  render() {
    const { className, userInfo = {} } = this.props;
    return (
      <span className={classNames(className, styles.dropDown)}>
        <Icon type="user" />
        {userInfo.userName}
      </span>
    );
  }
}

export default UserCenter;
