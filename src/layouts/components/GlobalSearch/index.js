import { PureComponent } from 'react';
import HeaderSearch from '@components/HeaderSearch';

import classNames from 'classnames';
import styles from './index.less';

class Search extends PureComponent {
  render() {
    const { className } = this.props;
    return <HeaderSearch className={classNames(className, styles.headerSearch)} />;
  }
}

export default Search;
