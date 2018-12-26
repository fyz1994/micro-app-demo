import React, { Component } from 'react';
import { Layout } from 'antd'
import { SiderMenu } from './pages/Menu'
import './App.css';

const {
  Footer, Sider, Content,
} = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <SiderMenu />
        </Sider>
        <Layout>
          <Content>
            <h1>微应用2</h1>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            微应用2
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
