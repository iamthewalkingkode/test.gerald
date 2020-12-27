import React from 'react';
import { Col, Input, Layout, Row } from 'antd';
import { GSider } from './partials';
import { Inbox, IncomingCall } from './components';

const { Header, Content } = Layout;

const App = () => {

  return (
    <Layout>
      <GSider />
      <Layout className="site-layout" style={{ marginLeft: '18vw' }}>
        <Header className="site-layout-background" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Row>
            <Col span="4">
              <span className="pointer">
                <i className="icon-menu text-muted" />
              </span>
            </Col>
            <Col span="9" className="text-center">
              <Input.Search style={{ width: 300, marginTop: 15 }} placeholder="Search for emails..." />
            </Col>
            <Col span="4"></Col>
            <Col span="2" className="text-right">
              <i className="icon-bell" /> &nbsp; &nbsp;
              <img src="assets/img/users/user2.png" alt="Frank Hook" className="round-img" />
            </Col>
            <Col span="3" className="text-right"></Col>
          </Row>
        </Header>

        <Content style={{ margin: '24px 0px 0', overflow: 'initial' }}>
          <Inbox />

          <IncomingCall />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
