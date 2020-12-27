import { Col, Row } from 'antd';
import React, { useEffect } from 'react';


const MessagesList = (props) => {
    const messages = require('../../data/messages.json');

    useEffect(() => {
        // props.setMsg(messages[3]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            {[1, 2].map(k => messages.map(msg => {
                var avatarName = msg.from.name.split(' ');
                return (
                    <div key={msg.id} className={`msg-item ${props.activeMsg.id === msg.id ? 'active' : ''}`} onClick={() => props.setMsg(msg)}>
                        <Row>
                            <Col span="20">
                                <div className="avatar">
                                    {msg.from.avatar && (
                                        <img src={msg.from.avatar} alt={msg.from.name} />
                                    )}
                                    {!msg.from.avatar && (
                                        <div className="name">{avatarName[0][0]}{avatarName[1][0]}</div>
                                    )}
                                </div>
                                <div className="names">
                                    <div className="name">{msg.from.name} &nbsp;{msg.from.email}</div>
                                    <div className="subject flex-middle">
                                        {msg.subject}&nbsp;{msg.conversations && (<span className="text-muted small">({msg.conversations})</span>)}
                                        {!msg.read && (
                                            <span className="unread"></span>
                                        )}
                                        <div className="clearfix" />
                                    </div>
                                </div>
                                <div className="clearfix" />
                            </Col>
                            <Col span="4">
                                <div className="date text-muted">{msg.attachments.length > 0 ? <i className="icon-paper-clip" /> : ''}&nbsp; {msg.date}</div>
                            </Col>
                        </Row>
                        <p>{msg.message}</p>
                    </div>
                )
            }))}
        </React.Fragment>
    );
}


export default MessagesList;