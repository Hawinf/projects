import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './dropdown.css';

const ContentDropdown = () => {
    return (
        <div className="dropdown-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="drop-left">
                            <h3 className="drop-judul">Frequently Asked Question</h3>
                            <p className="drop-desc">Frequently Asked Question</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="drop-right">
                        <>
                                <Row>
                                    <Col>
                                        
                                        <div>
                                            <Accordion defaultActiveKey="0">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header className="accor-head">Accordion Item #1</Accordion.Header>
                                                    <Accordion.Body>
                                                        First Item
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                                    <Accordion.Body>
                                                        Second Item
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </Col>
                                </Row>
                        </>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default ContentDropdown;