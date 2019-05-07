import { PureComponent } from 'react';
import { Icon, Input, AutoComplete } from 'antd';
import classNames from 'classnames';

import styles from './index.less';

const { Option } = AutoComplete;

class HeaderSearch extends PureComponent {
  state = {
    searchMode: this.props.defaultOpen,
  };
  //点击搜索按钮，弹出输入框
  enterSearchMode = () => {
    this.setState({ searchMode: true }, () => {
      const { searchMode } = this.state;
      if (searchMode) {
        //光标聚焦的到输入框
        this.input.focus();
      }
    });
  };
  //鼠标离开输入框，输入框隐藏
  leaveSearchMode = () => {
    this.setState({
      searchMode: false,
    });
  };
  render() {
    const { searchMode } = this.state;
    const inputClass = classNames(styles.input, {
      [styles.show]: searchMode,
    });
    return (
      <span className={styles.headerSearch} onClick={this.enterSearchMode}>
        <Icon type="search" key="Icon" />
        <AutoComplete className={inputClass}>
          <Input
            placeholder="站内搜索"
            ref={node => {
              this.input = node;
            }}
            //离开输入框的时候，触发点击事件
            onBlur={this.leaveSearchMode}
          />
        </AutoComplete>
      </span>
    );
  }
}

export default HeaderSearch;
