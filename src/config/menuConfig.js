const menuList = [
  {
    title: 'Dashboard',
    key: '/dashboard',
    type: 'dashboard',
    level: 1,
    children: [
      {
        title: '分析页',
        key: '/dashboard/analysis',
      },
      {
        title: '监控页',
        key: '/dashboard/monitor',
      },
      {
        title: '工作台',
        key: '/dashboard/work',
      },
    ],
  },
  {
    title: '表单页',
    key: '/form',
    type: 'form',
    level: 1,
    children: [
      {
        title: '基础表单',
        key: '/form/basic',
      },
      {
        title: '分步表单',
        key: '/form/step',
      },
      {
        title: '高级表单',
        key: '/form/high',
      },
    ],
  },
  {
    title: '列表页',
    key: '/table',
    type: 'table',
    level: 1,
    children: [
      {
        title: '查询表格',
        key: '/table/query',
      },
      {
        title: '标准列表',
        key: '/table/standard',
      },
      {
        title: '卡片列表',
        key: '/table/card',
      },
      {
        title: '搜索列表',
        key: '/table/search',
        type: 'file-search',
        level: 2,
        children: [
          {
            title: '搜索列表（文章）',
            key: '/table/search/article',
          },
          {
            title: '搜索列表（项目）',
            key: '/table/search/project',
          },
          {
            title: '搜索列表（应用）',
            key: '/table/search/app',
          },
        ],
      },
    ],
  },
  {
    title: '详情页',
    key: '/detail',
    type: 'profile',
    level: 1,
    children: [
      {
        title: '基础详情页',
        key: '/detail/basic',
      },
      {
        title: '高级详情页',
        key: '/detail/high',
      },
    ],
  },
  {
    title: '结果页',
    key: '/result',
    type: 'check-circle',
    level: 1,
    children: [
      {
        title: '成功页',
        key: '/result/success',
      },
      {
        title: '失败页',
        key: '/result/failed',
      },
    ],
  },
  {
    title: '异常页',
    key: '/error',
    type: 'warning',
    level: 1,
    children: [
      {
        title: '403',
        key: '/error/403',
      },
      {
        title: '404',
        key: '/error/404',
      },
      {
        title: '500',
        key: '/erroe/500',
      },
    ],
  },
  {
    title: '个人页',
    key: '/personal',
    type: 'user',
    level: 1,
    children: [
      {
        title: '个人中心',
        key: '/personal/center',
      },
      {
        title: '个人设置',
        key: '/personal/set',
      },
    ],
  },
  {
    title: '图形编辑器',
    key: '/picture',
    type: 'highlight',
    level: 1,
    children: [
      {
        title: '流程编辑器',
        key: '/picture/process',
      },
      {
        title: '脑图编辑器',
        key: '/picture/header',
      },
      {
        title: '拓扑编辑器',
        key: '/picture/topology',
      },
    ],
  },
];
export default menuList;
