const Mock = require('mockjs'); //eslint-disable-line
const { decrypt } = require('./CryptoJS');

module.exports = {
  [`POST /login`](req, res) {
    const { body } = req;
    const { password, username } = JSON.parse(body);
    const pwd = decrypt(password);
    if (pwd === 'admin' && username === 'admin') {
      res.status(200).json({
        data: {
          alertDesc: '登录成功！',
        },
        status: 0,
      });
    } else {
      res.status(200).json({
        data: {
          alertDesc: '账号或密码错误！',
        },
        status: -1,
      });
    }
  },
};

// import mockjs from 'mockjs';
// import decrypt from './CryptoJS';

// export default {
//   // 使用 mockjs 等三方库
//   'POST /login': (req, res) => {
//     const { body } = req;
//     const { password, username } = JSON.parse(body);
//     const pwd = decrypt(password);
//     if (pwd === 'admin' && username === 'admin') {
//       res.send({
//         data: {
//           alertDesc: '登录成功！',
//         },
//         status: 200,
//       });
//     } else {
//       res.send({
//         data: {
//           alertDesc: '账号或密码错误！',
//         },
//         status: -1,
//       });
//     }
//   },
// };
