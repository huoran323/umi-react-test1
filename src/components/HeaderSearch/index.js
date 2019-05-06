import { PureComponent } from 'react';
import { Icon } from 'antd';

class HeaderSearch extends PureComponent {
  render() {
    return (
      <span style={{ display: 'inline-block' }}>
        <Icon type="search" key="Icon" />
      </span>
    );
  }
}

export default HeaderSearch;
