/*
 * @Author: your name
 * @Date: 2021-01-08 11:40:20
 * @LastEditTime: 2021-01-08 15:17:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/src/config/AuthStore.ts
 */
import {
  action,
  computed,
  observable,
} from 'mobx';
import { create } from 'mobx-persist';

class AuthStore {
  @observable name = '';
  @observable password = '';
  @observable islogin = false;
  @observable user = {};

  @action setname = (name: string) => {
    this.name = name
  }

  @action setPassword = (password: string) => {
    this.password = password
  }

  @action setIsLogin = (islogin: boolean) => {
    this.islogin = islogin
  }

  @action setUserInfo = (user:object) => {
    console.log('----user',user);
    this.user = user
  }

  @action initStore = () => {
    this.name = '';
    this.password = '';
    this.user = {
      id: '',
      // phone: '',
      // avatar: '',
      real_name: '',
      email: '',
    };
  };

  // 退出登录
  @action logout = () => {
    this.initStore();
  }

  // 账号清空
  @action authClear = () => {
    this.password = '';
    this.name = '';
  }

  @computed get isLogin() {
    return this.islogin;
  }
}

const hydrate = create({
  storage: window.localStorage,
});

async function doPersist() {
  await hydrate('AuthStore', store);
}

const store = new AuthStore();

doPersist();

export default observable(store);