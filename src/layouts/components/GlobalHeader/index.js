import Search from '../GlobalSearch';
import User from '../GlobalUserCenter';
import Notice from '../Notice';

import styles from './index.less';
import classNames from 'classnames';

function Header(props) {
  const { userInfo } = props;
  return (
    <div className={styles.rightCenter}>
      <Search className={classNames(styles.action, styles.search)} />
      <Notice className={styles.action} />
      <User className={styles.action} userInfo={userInfo} />
    </div>
  );
}

export default Header;
