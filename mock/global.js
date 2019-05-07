const Mock = require('mockjs'); //eslint-disable-line

const { Random } = Mock;
const info = Mock.mock({
  data: {
    userInfo: {
      userName: Random.name(),
    },
    message: {
      news: Random.cparagraph(17, 30),
      'count|18-32': 1,
    },
  },
  status: 0,
});

module.exports = {
  [`POST /getSysInfo`](req, res) {
    res.status(200).json(info);
  },
};
