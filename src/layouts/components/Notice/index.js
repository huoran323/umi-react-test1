import { PureComponent } from 'react';
import { Badge, Icon } from 'antd';

class Notice extends PureComponent {
  render() {
    return (
      <span style={{ display: 'inline-block' }}>
        <Badge>
          <Icon type="bell" />
        </Badge>
      </span>
    );
  }
}

export default Notice;
