import { Badge, Col, Row, Tabs } from 'antd';
import React, { useState } from 'react';

import './Inbox.scss';
import MessagesList from './MessagesList';
import MessagesOpen from './MessagesOpen';

const Inbox = () => {

    const [msg, setMsg] = useState({});
    const [activeTab, setActiveTab] = useState('1');

    return (
        <React.Fragment>
            <div id="Inbox">
                <div className="messages">
                    <div style={{ padding: 25 }}>
                        <Row>
                            <Col span={12}>
                                <i className="icon-refresh" /> <Badge count={1} />
                            </Col>
                            <Col span={12}>
                                <div className="text-muted small text-right">
                                    1 of 43 &nbsp; &nbsp;
                                    <i className="icon-arrow-left" /> &nbsp; &nbsp; <i className="icon-arrow-right" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Tabs type="card" size="large" activeKey={activeTab} onChange={e => setActiveTab(e)}>
                        <Tabs.TabPane key="1" tab={<span><i className="icon-grid" />&nbsp; Main</span>}>
                            <MessagesList activeMsg={msg} setMsg={setMsg} />
                        </Tabs.TabPane>
                        <Tabs.TabPane key="2" tab={<span><i className="icon-tag" />&nbsp; Offers</span>}>
                            <MessagesList activeMsg={msg} setMsg={setMsg} />
                        </Tabs.TabPane>
                        <Tabs.TabPane key="3" tab={<span><i className="icon-user" />&nbsp; Community</span>}>
                            <MessagesList activeMsg={msg} setMsg={setMsg} />
                        </Tabs.TabPane>
                    </Tabs>
                </div>
                <div className={`messageOpen ${!msg.id ? 'flex-middle just' : ''}`}>
                    {!msg.id && (
                        <div className="text-center">
                            <img src="assets/img/inbox-empty.svg" alt="no message" />
                            <p>Please choose a message to open</p>
                        </div>
                    )}
                    {msg.id && (
                        <MessagesOpen msg={msg} />
                    )}
                </div>
                <div className="clearfix" />
            </div>
        </React.Fragment>
    );
}

export default Inbox;