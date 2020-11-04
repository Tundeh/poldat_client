import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PieChart from "./Chart/PieChart";
import BarChart from "./Chart/BarChart";
import LineChart from "./Chart/LineChart";
import "./index.scss";

const Dashboard = () => {
  return (
    <>
      <Row>
          <Col xs={12} sm={3} md={3} lg={3}>
            <Card>
              <div className="app-cards">
                <div className="icon">
                  <FontAwesomeIcon icon="address-book" />
                </div>

                <span> 32,4553</span>

                <div className="card-label">
                  <span>Members</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={3} md={3} lg={3}>
            <Card>
              <div className="app-cards">
                <div className="icon">
                  <FontAwesomeIcon icon="users" />
                </div>

                <span> 32 </span>

                <div className="card-label">
                  <span>Groups</span>
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={12} sm={3} md={3} lg={3}>
            <Card>
              <div className="app-cards">
                <div className="icon">
                  <FontAwesomeIcon icon="user" />
                </div>

                <span> 9 </span>

                <div className="card-label">
                  <span>Users</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={12} sm={3} md={3} lg={3}>
            <Card>
              <div className="app-cards">
                <div className="icon">
                  <FontAwesomeIcon icon="calendar-alt" />
                </div>

                <span> 10 </span>

                <div className="card-label">
                  <span>Events</span>
                </div>
              </div>
            </Card>
          </Col>
    
        <Col xs={12} sm={6} md={6} lg={6}>
          <div className="chart-wrapper">
            <Card>
            <div className="chart-label">
                <span>Gender Demographic</span>
              </div>
              <Card.Body>
                <PieChart />
              </Card.Body>
            </Card>
          </div>
        </Col>

        <Col xs={12} sm={6} md={6} lg={6}>
          <div className="chart-wrapper">
            <Card>
              <div className="chart-label">
                <span>Gender Demographic</span>
              </div>
              <Card.Body>
                <BarChart />
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col xs={12} sm={9} md={9} lg={9}>
          <div className="chart-wrapper">
            <Card>
              <div className="chart-label">
                <span>Gender Demographic</span>
              </div>
              <Card.Body>
                <LineChart />
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col lg={3}>
        <div>
          <Card>
            <Card.Header><h4>Recent Users</h4></Card.Header>
            <div><h6>2ndeh  20min ago</h6></div>
            <div><h6>2ndeh  20min ago</h6></div>
            <div><h6>2ndeh  20min ago</h6></div>
            <div><h6>2ndeh  20min ago</h6></div>
            <div><h6>2ndeh  20min ago</h6></div>
          </Card>
        </div>
        </Col>
        
      </Row>
    </>
  );
};

export default Dashboard;
