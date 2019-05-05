import { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import styles from './index.less';

const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    //onSubmit是从属性值传递过来的
    const { form, onSubmit } = this.props;
    form.validateFields({ force: true }, (errors, values) => {
      //将点击事件中的参数传递回去，回去做点击操作
      console.log(values);
      onSubmit(errors, values);
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.login_form}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              initialValue: 'admin',
              rules: [
                {
                  required: true,
                  message: '请输入用户名',
                },
              ],
            })(<Input prefix={<Icon type="user" />} placeholder="请输入用户名" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              initialValue: 'admin',
              rules: [
                {
                  required: true,
                  message: '请输入密码',
                },
              ],
            })(<Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('rememberme', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>自动登录</Checkbox>)}
            <a className={styles.login_form_forgot} href="/">
              忘记密码
            </a>
            <Button type="primary" htmlType="submit" className={styles.login_form_button}>
              登录
            </Button>
            <a href="/#register" className={styles.login_form_register}>
              注册账户!
            </a>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default Form.create()(Login);
