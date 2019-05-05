//此处的写法会将若干export导出的内容组合成一个对象返回
import * as api from './service';
import { routerRedux } from 'dva/router';
import { encrypt } from '@utils/CryptoJS';

export default {
  namespace: 'login',
  state: {},
  effects: {
    //Effect 是一个 Generator 函数，内部使用 yield 关键字，标识每一步的操作（不管是异步或同步）,所以使用*号
    //dva 提供多个 effect 函数内部的处理函数，比较常用的是 call 和 put。
    // call：执行异步函数
    // put：发出一个 Action，类似于 dispatch
    *loginRequest({ payload }, { call, put }) {
      const { password, ...rest } = payload;
      const { status } = yield call(api.login, { password: encrypt(password), ...rest });
      if (status === 0) {
        sessionStorage.setItem('isLogin', true);
        yield put(routerRedux.push('/user'));
      }
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
