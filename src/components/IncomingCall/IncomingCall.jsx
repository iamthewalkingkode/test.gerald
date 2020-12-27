import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';

import './IncomingCall.scss';

const IncomingCall = () => {

    const [hasCall, setHasCall] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHasCall(true);
            setTimeout(() => {
                window['$']('#IncomingCall').removeClass('fadeInUp').addClass('bounce infinite slow');
            }, 400);
        }, 3000);
    }, []);

    return (
        <React.Fragment>
            {hasCall && (
                <div id="IncomingCall" className="animated fadeInUp">
                    <Row>
                        <Col span="4">
                            <img src="assets/img/users/user.png" alt="Caller" />
                        </Col>
                        <Col span="16" className="text-center flex-middle just">
                            <div>
                                <span className="dots">...</span> &nbsp;

                                <b>Brian</b> is calling &nbsp;

                                <span className="dots">...</span>
                            </div>
                        </Col>
                        <Col span="4">
                            <img src="assets/img/users/user2.png" alt="Callee" />
                        </Col>
                    </Row>
                    <div className="bt text-center" style={{ marginTop: 20, paddingTop: 20 }}>
                        <Row>
                            <Col span="12">
                                <div className="pointer" onClick={() => {
                                    // window['$']('#IncomingCall').removeClass('fadeInUp').addClass('bounce infinite slow');
                                    setHasCall(false);
                                }}>
                                    <i className="icon-close danger" /> &nbsp; IGNORE
                                </div>
                            </Col>
                            <Col span="12" className="text-center">
                                <div className="pointer">
                                    <i className="icon-phone primary" /> &nbsp; ANSWER
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default IncomingCall;