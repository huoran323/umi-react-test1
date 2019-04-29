import { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class Login extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form>
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
            <a className="login-form-forgot" href="/">
              忘记密码
            </a>
            <Button type="primary">登录</Button>
            <a href="/#register">注册账户!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}
export default Form.create()(Login);
