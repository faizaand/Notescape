import React from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
  render() {
    return <>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </>
  }
}

export default App;
