import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import singleSpaReact from 'single-spa-react'

import igrootFetch from 'igroot-fetch'

window.Client = igrootFetch(`http://172.18.9.73:8000/api/v1`, {
  timeout: 100000,
  handleErrors(res) {
    message.error(res.msg)
  },
  handleHttpErrors(response) {
    notification.error({ message: 'Http Error', description: response.statusText })
  },
})

window.Client.get('software/type_list/').then(res => {
  console.log(res)
})
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
//创建生命周期实例
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => document.getElementById('angularjs')
})

// 项目启动的钩子
export const bootstrap = [
  reactLifecycles.bootstrap,
]
// 项目启动后的钩子
export const mount = [
  reactLifecycles.mount,
]
// 项目卸载的钩子
export const unmount = [
  reactLifecycles.unmount,
]
