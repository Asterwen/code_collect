import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
          LoadingComponent: require('/Users/liuqiyu/Desktop/lionBridgeProject/CarLoan_assist_pc/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    Routes: [require('../Authorized').default],
    authority: ['user', 'admin'],
    routes: [
      {
        path: '/',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__result__index" */ '../result/index'),
              LoadingComponent: require('/Users/liuqiyu/Desktop/lionBridgeProject/CarLoan_assist_pc/src/components/PageLoading/index')
                .default,
            })
          : require('../result/index').default,
        title: '测试请求',
        exact: true,
        Routes: [require('./TitleWrapper.jsx').default],
        _title: '测试请求',
        _title_default: '试驾蔚来ES8，认识路上的自己',
      },
      {
        title: 'exception',
        path: '/exception',
        routes: [
          {
            path: '/exception/403',
            title: 'not-permission',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "layouts__BasicLayout" */ '../exception/403'),
                  LoadingComponent: require('/Users/liuqiyu/Desktop/lionBridgeProject/CarLoan_assist_pc/src/components/PageLoading/index')
                    .default,
                })
              : require('../exception/403').default,
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: 'exception - not-permission',
            _title_default: '试驾蔚来ES8，认识路上的自己',
          },
          {
            path: '/exception/404',
            title: 'not-find',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "layouts__BasicLayout" */ '../exception/404'),
                  LoadingComponent: require('/Users/liuqiyu/Desktop/lionBridgeProject/CarLoan_assist_pc/src/components/PageLoading/index')
                    .default,
                })
              : require('../exception/404').default,
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: 'exception - not-find',
            _title_default: '试驾蔚来ES8，认识路上的自己',
          },
          {
            path: '/exception/500',
            title: 'server-error',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "layouts__BasicLayout" */ '../exception/500'),
                  LoadingComponent: require('/Users/liuqiyu/Desktop/lionBridgeProject/CarLoan_assist_pc/src/components/PageLoading/index')
                    .default,
                })
              : require('../exception/500').default,
            exact: true,
            Routes: [require('./TitleWrapper.jsx').default],
            _title: 'exception - server-error',
            _title_default: '试驾蔚来ES8，认识路上的自己',
          },
          {
            component: () =>
              React.createElement(
                require('/Users/liuqiyu/Desktop/lionBridgeProject/CarLoan_assist_pc/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
            _title: '试驾蔚来ES8，认识路上的自己',
            _title_default: '试驾蔚来ES8，认识路上的自己',
          },
        ],
        _title: 'exception',
        _title_default: '试驾蔚来ES8，认识路上的自己',
      },
      {
        path: '/404',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('/Users/liuqiyu/Desktop/lionBridgeProject/CarLoan_assist_pc/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
        _title: '试驾蔚来ES8，认识路上的自己',
        _title_default: '试驾蔚来ES8，认识路上的自己',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/liuqiyu/Desktop/lionBridgeProject/CarLoan_assist_pc/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: '试驾蔚来ES8，认识路上的自己',
        _title_default: '试驾蔚来ES8，认识路上的自己',
      },
    ],
    _title: '试驾蔚来ES8，认识路上的自己',
    _title_default: '试驾蔚来ES8，认识路上的自己',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/liuqiyu/Desktop/lionBridgeProject/CarLoan_assist_pc/node_modules/_umi-build-dev@1.18.5@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: '试驾蔚来ES8，认识路上的自己',
    _title_default: '试驾蔚来ES8，认识路上的自己',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
