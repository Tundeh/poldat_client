import React from 'react';
import {Card, Row, Col} from "react-bootstrap";
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Dashboard = () => {
  console.log('reached here');
return (
<Row>
                <Col xs={12} md={4} xl={3}>
                        <Card>
                            <div className="app-cards">
                                    <div className="icon">
                                    <FontAwesomeIcon icon="address-book"/>
                                    </div>
            
                                   <span> 32,4553</span>
                                
                                <div className="card-label">
                                    <span>Members</span>
                                </div>
                            </div>
                        </Card>
                        </Col>
                        <Col xs={12} md={4} xl={3}>
                        <Card>
                        <div className="app-cards">
                                    <div className="icon">
                                    <FontAwesomeIcon icon="users"/>
                                    </div>
            
                                   <span> 32 </span>
                                
                                <div className="card-label">
                                    <span>Groups</span>
                                </div>
                            </div>
                            
                        </Card>
                        </Col>

                        <Col xs={12} md={4} xl={3}>
                        <Card>
                        <div className="app-cards">
                                    <div className="icon">
                                    <FontAwesomeIcon icon="user"/>
                                    </div>
            
                                   <span> 9 </span>
                                
                                <div className="card-label">
                                    <span>Users</span>
                                </div>
                            </div>
                            
                        </Card>
                        </Col>
                        <Col xs={12} md={4} xl={3}>
                        <Card>
                        <div className="app-cards">
                                    <div className="icon">
                                    <FontAwesomeIcon icon="calendar-alt"/>
                                    </div>
            
                                   <span> 10 </span>
                                
                                <div className="card-label">
                                    <span>Upcomming Events</span>
                                </div>
                            </div>
                            
                        </Card>
                        </Col>
                        <Col xs={12} md={8} xl={6}>
                            <Card>
                                <Card.Body>
                                    chart
                                </Card.Body>
                            </Card>
                        </Col>
            </Row>
)
}

export default Dashboard;