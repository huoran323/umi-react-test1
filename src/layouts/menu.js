import React from 'react';
import { Menu, Icon } from 'antd';
import router from 'umi/router';
import Link from 'umi/link';

const SubMenu = Menu.SubMenu;

class MenuComponent extends React.Component {
  link = url => {
    router.push(url);
  };

  rootSubmenuKeys = [];

  //列表菜单渲染
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        //添加这个参数为了列表页中的搜索列表不添加icon
        if (item.level === 1) {
          this.rootSubmenuKeys.push(item.key);
          return (
            <SubMenu
              key={item.key}
              title={
                <span>
                  <Icon type={item.type} />
                  {/* 此处的span控制缩进的时候不显示文字 */}
                  <span>{item.title}</span>
                </span>
              }
            >
              {this.renderMenu(item.children)}
            </SubMenu>
          );
        } else {
          return (
            <SubMenu key={item.key} title={item.title}>
              {this.renderMenu(item.children)}
            </SubMenu>
          );
        }
      }
      return (
        <Menu.Item
          title={item.title}
          key={item.key}
          onClick={() => {
            this.link(item.key);
          }}
        >
          {/* <NavLink to={item.key}>{item.title}</NavLink> */}
          {/* //通过onClick，运用push命令式跳转 */}
          <span>{item.title}</span>
          {/* //umi声明式跳转 */}
          {/* <span>
            <Link to={item.key} />
            {item.title}
          </span> */}
        </Menu.Item>
      );
    });
  };

  render() {
    const { menu } = this.props;
    return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {this.renderMenu(menu)}
      </Menu>
    );
  }
}

export default MenuComponent;
