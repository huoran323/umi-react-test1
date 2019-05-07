import { PureComponent } from 'react';
import { Badge, Icon, Popover } from 'antd';
import classNames from 'classnames';

import styles from './index.less';

class Notice extends PureComponent {
  render() {
    const { className } = this.props;
    return (
      <Popover className={classNames(className)}>
        <span className={styles.noticeButton}>
          <Badge count={5} offset={[-5, 5]}>
            <Icon type="bell" className={styles.icon} />
          </Badge>
        </span>
      </Popover>
    );
  }
}

export default Notice;
