module.exports = {
  apiPrefix: document.head.dataset.api || '',
  defaultPage: {
    pathname: '/login',
    state: {},
  },
  sysDefaultPage: {
    pathname: '/sys/github',
    state: {},
  },
};
