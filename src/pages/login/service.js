import request from '@utils/request';

export function login(payload) {
  return request('/login', {
    //请求方式
    method: 'POST',
    body: JSON.stringify({
      ...payload,
    }),
    setting: {
      STATUS: 0,
    },
  });
}
