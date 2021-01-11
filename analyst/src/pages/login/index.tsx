import { Button, Checkbox, Form, Input, notification } from 'antd';
import React from 'react';
import AuthStore from 'config/AuthStore';
import './index.less';
import { observer } from 'mobx-react';
import { linkTo } from 'utils';
import { defaultMountApp } from 'config/routes';
import { defaultHttp, postApi } from 'utils/request';

const Login = (props: any) => {

  // 账号的回调
  const onFinish = (values: any) => {
    const { name, password } = values;
    AuthStore.setname(name);
    AuthStore.setPassword(password)
    // 校验
    if (!validateLogin()) return;

    postApi(`${defaultHttp}/login`, values, (data: any) => {
      console.log('----data', data);
      if (data) {
        const { id } = data;
        localStorageSet('_t', id);
        AuthStore.setIsLogin(true);

        linkTo(defaultMountApp());
        window.location.reload()
        notification.success({
          message: '登录成功',
        });
      }
    })

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  /**
   * @description: 点击忘记密码
   * @param {type}
   * @return:
   */
  // handleForgetPassword = () => props.history.push('/auth/reset-step-1');

  /**
   * @description: 点击注册按钮
   * @param {type}
   * @return:
   */
  // handleRegister = () => props.history.push('/auth/signup');


  /**
 * @description: 校验登录表单
 * @param {type}
 * @return:
 */
  const validateLogin = () => {
    if (!AuthStore.name) {
      notification.error({
        message: '校验错误',
        description: '用户名不能为空',
      });
      return false;
    }
    if (!AuthStore.password) {
      notification.error({
        message: '校验错误',
        description: '密码不能为空',
      });
      return false;
    }
    if (AuthStore.password.length < 8) {
      notification.error({
        message: '校验错误',
        description: '密码长度不能小于8位 ',
      });
      return false;
    }
    return true;
  };

  return (
    <div className="analyst_login">
      <div className="login_form">
        <Form
          name="basic"
          className="form_list"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="账号"
            name="name"
            className="form_name form_input"
            rules={[{ required: true, message: '请输入手机号/账号' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            className="form_password form_input"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item >
            <Button type="primary" htmlType="submit" className="from_btn">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

const localStorageSet = (k: string, v: string) => {
  if (!window.localStorage) return;
  window.localStorage.setItem(k, v);
};

export default observer(Login);

