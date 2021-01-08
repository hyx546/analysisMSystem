/*
 * @Author: your name
 * @Date: 2021-01-08 11:40:20
 * @LastEditTime: 2021-01-08 15:17:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /analyst/src/config/AuthStore.ts
 */
import { observable, action, computed } from 'mobx';
import { create } from 'mobx-persist';

class AuthStore {
  @observable username = '';
  @observable password = '';
  @observable islogin = false;

  @action setUsername = (username: string) => {
    this.username = username
  }

  @action setPassword = (password: string) => {
    this.password = password
  }

  @action setIsLogin = (islogin: boolean) => {
    this.islogin = islogin
  }

  // @doPersist('object') @observable user = {
  //   id: '',
  //   phone: '',
  //   avatar: '',
  //   nick_name: '',
  //   real_name: '',
  //   company: null,
  //   roles: [],
  //   role: '',
  //   mail: '',
  //   auth: {
  //     is_admin: false,
  //     tabs: [],
  //   },
  //   company_id: '',
  // };

  @action initStore = () => {
    this.username = '';
    this.password = '';
    // this.user = {
    //   id: '',
    //   phone: '',
    //   avatar: '',
    //   nick_name: '',
    //   real_name: '',
    //   company: null,
    //   roles: [],
    //   role: '',
    //   mail: '',
    //   auth: {
    //     is_admin: false,
    //     tabs: [],
    //   },
    //   company_id: '',
    // };
  };

  // 退出登录
  @action logout = () => {
    this.initStore();
  }

  // 账号清空
  @action authClear = () => {
    this.password = '';
    this.username = '';
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

export default store;