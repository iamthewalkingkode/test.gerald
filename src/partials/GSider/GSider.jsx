import React from 'react';
import { Badge, Button, Layout, Menu } from 'antd';

import './GSider.scss';

const GSider = () => {

    const menus = ['Inbox', 'Pinned', 'Drafts', 'Categories', 'Notes', 'Reminders'];
    const friends = require('../../data/friends.json');

    return (
        <React.Fragment>
            <Layout.Sider id="GSider" width="18vw"
            // collapsed={false}
            >
                <div style={{ padding: '50px 0 0 50px', }}>
                    <Button type="primary" size="large">Create New</Button>
                    <p>&nbsp;</p>

                    <b>Messeges</b>
                </div>
                <p>&nbsp;</p>

                <Menu mode="inline" defaultSelectedKeys={['0']}>
                    {menus.map((menu, k) => (
                        <Menu.Item key={k}>
                            <span className="t">{menu}</span>
                            {k === 0 && (
                                <Badge count={2} />
                            )}
                            <div className="clearfix" />
                        </Menu.Item>
                    ))}
                </Menu>
                <p>&nbsp;</p>
                <div style={{ paddingLeft: '50px', }}>
                    <b>Friends</b>
                    {friends.length > 0 && (
                        <div style={{ marginTop: 15 }}>
                            {friends.map(fr => (
                                <div className={`pull-left ${fr.online ? 'online' : ''}`} style={{ marginRight: 15, position:'relative' }}>
                                    <img className="round-img" src={fr.avatar} alt={fr.name} />
                                </div>
                            ))}
                            <div className="clearfix"></div>
                        </div>
                    )}
                    <p>&nbsp;</p>
                    <small>See All</small>
                </div>
            </Layout.Sider>
        </React.Fragment>
    );
}

export default GSider;
