import { PureComponent } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';

import GlobalHeader from '../../components/GlobalHeader';

class Index extends PureComponent {
  render() {
    const { userInfo, message, notification } = this.props;
    return (
      <div style={{ width: '460px' }}>
        <GlobalHeader userInfo={userInfo} />
      </div>
    );
  }
}

// export default Index;
export default connect(({ global: { userInfo } }) => {
  return {
    userInfo,
  };
})(Index);
