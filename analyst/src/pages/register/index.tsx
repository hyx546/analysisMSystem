import './index.less';

import React from 'react';

import {
  Button,
  Form,
  Input,
  notification,
} from 'antd';
import AuthStore from 'config/AuthStore';
import { defaultMountApp } from 'config/routes';
import { emaliRegex, linkTo } from 'utils';
import {
  defaultHttp,
  postApi,
} from 'utils/request';
import { withRouter } from 'react-router-dom';

const Register = (props: any) => {

  // 账号的回调
  const onFinish = (values: any) => {
    const { name, password, real_name, email } = values;
    // 校验
    if (!validateLogin(values)) return;

    postApi(`${defaultHttp}/register`, values, (data: any) => {
      if (data) {
        const { _id: id } = data;
        localStorageSet('_t', id);
        localStorageSet('_user', JSON.stringify(data));
        AuthStore.setIsLogin(true);
        notification.success({
          message: '注册成功',
        });
        linkTo(defaultMountApp());
        // window.location.reload()
        
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
  const validateLogin = (val: { name: any; password: any; real_name: any; email: any; }) => {
    const { name, password, email } = val;
    if (!name) {
      notification.error({
        message: '校验错误',
        description: '用户名不能为空',
      });
      return false;
    }
    if (!password) {
      notification.error({
        message: '校验错误',
        description: '密码不能为空',
      });
      return false;
    }

    if (email && !(emaliRegex(email))) {
      notification.error({
        message: '校验错误',
        description: '邮箱格式有误',
      });
      return false;
    }
    if (password.length < 8) {
      notification.error({
        message: '校验错误',
        description: '密码长度不能小于8位 ',
      });
      return false;
    }
    return true;
  };

  return (
    <div className="analyst_register">
      <div className="register_form">
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

          <Form.Item
            label="姓名"
            name="real_name"
            className="form_real_name form_input"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            className="form_email form_input"
          >
            <Input />
          </Form.Item>

          {/* <div className="forget" onClick={handleForgetPassword}>
            忘记密码？
          </div> */}

          <Form.Item >
            <Button type="primary" htmlType="submit" className="from_btn">
              立即注册
            </Button>
          </Form.Item>
          <div className="tips" >
            <Button type="ghost" className="register"
              onClick={() => props.history.push('/login')}
            >登录</Button>
          </div>
        </Form>

      </div>
    </div>
  );
}

const localStorageSet = (k: string, v: string) => {
  if (!window.localStorage) return;
  window.localStorage.setItem(k, v);
};

export default withRouter(Register);

