import { resolve } from 'path';
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history: 'hash', //hash路由
  hash: true, //生成hash文件名
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'myapp',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
  alias: {
    // webpack 额外配置一些文件夹的快速访问
    '@': resolve(__dirname, './src'),
    '@themes': resolve(__dirname, './src/themes'),
    '@components': resolve(__dirname, './src/components'),
    '@utils': resolve(__dirname, './src/utils'),
    '@config': resolve(__dirname, './src/utils/config'),
    // enums: resolve(__dirname, './src/utils/enums'),
    '@services': resolve(__dirname, './src/services'),
    '@models': resolve(__dirname, './src/models'),
    // routes: resolve(__dirname, './src/routes'),
  },
  proxy: {
    '/api': {
      target: '',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
