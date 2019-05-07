import Search from '../GlobalSearch';
import User from '../GlobalUserCenter';
import Notice from '../Notice';

import styles from './index.less';
import classNames from 'classnames';

function Header(props) {
  return (
    <div className={styles.rightCenter}>
      <Search />
      <Notice />
      <User />
    </div>
  );
}

export default Header;
