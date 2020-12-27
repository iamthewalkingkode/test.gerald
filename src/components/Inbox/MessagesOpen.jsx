import { Col, Row } from 'antd';
import React from 'react';


const MessagesOpen = (props) => {
    const { msg } = props;

    var avatarName = msg.from.name.split(' ');

    return (
        <React.Fragment>
            <div className="msgBody">
                <div className="bb" style={{ padding: '15px 50px' }}>
                    <Row>
                        <Col span="22" className="flex-middle">
                            <div className="avatar">
                                {msg.from.avatar && (
                                    <img src={msg.from.avatar} alt={msg.from.name} />
                                )}
                                {!msg.from.avatar && (
                                    <div className="name">{avatarName[0][0]}{avatarName[1][0]}</div>
                                )}
                            </div>
                            <div className="names">
                                <div className="subject flex-middle">
                                    {msg.subject} &nbsp; &nbsp; &nbsp; <small className="text-muted">{msg.from.email}</small>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            <div className="clearfix" />
                        </Col>
                        <Col span="2" className="flex-middle just text-right">
                            <i className="icon-pin" /> &nbsp; &nbsp; &nbsp;

                        <i className="icon-trash" />
                        </Col>
                    </Row>
                </div>

                <div style={{ padding: '15px 50px' }}>
                    <div>
                        <div className="pull-left">
                            <h1 style={{ fontSize: 30 }}>{msg.subject}</h1>
                        </div>
                        <div className="pull-right">
                            <i className="icon-pin warning" /> &nbsp; &nbsp;
                        <i className="icon-star" /> &nbsp; &nbsp;
                        <span className="text-muted small">{msg.date}</span>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <p>Hi Jaime,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu sapien at urna posuere congue id sed eros. Etiam eget ligula et tortor efficitur fermentum. Mauris lobortis luctus molestie. Donec libero ex, pulvinar nec nulla at, aliquet mattis velit. Sed nec augue id risus ornare eleifend. Cras a ipsum purus. Phasellus condimentum ac tortor vitae facilisis. Etiam et egestas sapien. Fusce at condimentum mauris. Proin sed ipsum metus. Vestibulum commodo vitae dolor ut facilisis. Praesent risus velit, aliquam non sem quis, rutrum viverra urna.</p>
                    <p>Phasellus bibendum, tortor vitae hendrerit euismod, felis lorem vulputate diam, sed auctor lectus est consectetur nunc. In luctus ligula et suscipit porttitor. Ut ac finibus est. Suspendisse vel pharetra libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam vitae finibus dui. Mauris sodales a neque lobortis accumsan. Donec porta dapibus placerat. Fusce fermentum sodales justo sit amet rutrum. Proin vitae leo eget elit fermentum cursus ut a nulla. Aliquam pellentesque feugiat purus sed tempus. Etiam eget pulvinar nunc. Sed posuere fringilla mauris, in iaculis elit congue non. Integer vulputate, dolor non pellentesque iaculis, diam augue egestas ex, a porttitor felis est in mi. Integer iaculis orci dolor.</p>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras malesuada, enim in bibendum ullamcorper, nibh sem pharetra elit, in dictum tortor risus ac massa. Maecenas posuere velit ut sollicitudin dignissim. Nam vulputate condimentum nulla, ut dapibus nibh iaculis vitae. Etiam pellentesque ullamcorper mollis. In nec efficitur nulla. Proin porttitor id ante fermentum condimentum. Morbi volutpat consequat turpis, at ullamcorper tellus tristique id. Praesent vel maximus neque. Vestibulum imperdiet posuere orci, nec tristique ex lobortis in.</p>
                    <p>Best Regards,</p>

                    {msg.attachments.length > 0 && (
                        <div className="attachments">
                            {msg.attachments.map(att => (
                                <div key={att.source} className="attachment" style={{ backgroundImage: `url(${att.source})` }}>
                                    <div className="details">
                                        <div className="text-right">
                                            <i className="icon-cloud-download" />
                                        </div>
                                        <div className="det">
                                            <b>{att.name}</b>
                                            <div className="small">{att.size}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="clearfix"></div>
                        </div>
                    )}
                </div>
            </div>

            <div className="msgFooter bt">
                <Row>
                    <Col span="23">
                        <img src="assets/img/users/user2.png" alt="Frank Hook" /> &nbsp; <b className="primary">Reply</b>
                    </Col>
                    <Col span="1" className="flex-middle">
                        <i className="icon-heart" />
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
}

export default MessagesOpen;