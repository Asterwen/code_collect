
// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    define:{
      'process.env.apiUrl': '接口地址1'
    },
    routes: [
      {
        path: '/',
        component: '../layouts/index',
        routes: [
          { path: '/', component: '../pages/index' }
        ]
      }
    ],
    plugins: [
      // ref: https://umijs.org/plugin/umi-plugin-react.html
      ['umi-plugin-react', {
        antd: true,
        dva: false,
        dynamicImport: { webpackChunkName: true },
        title: 'create',
        dll: false,
        
        routes: {
          exclude: [
            /components\//,
          ],
        },
      }],
    ],
  }
  