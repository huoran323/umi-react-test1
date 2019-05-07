import request from '@utils/request';

//获取基础信息
export function getSysInfo(payload) {
  return request('/getSysInfo', {
    method: 'POST',
    body: JSON.stringify({
      ...payload,
    }),
  });
}
