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
                                                    <Accordion.Header className="accor-head">Do you offer international shipping?</Accordion.Header>
                                                    <Accordion.Body>
                                                        Yes, we do. Be aware of Shipping Logistics, Shipping Costs, Customs and Duties, Documentation, Import Licensing, Phytosanitary and Health Inspections. and be aware of customs regulations and import duties in the destination countries.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>What is the minimum order quantity (MOQ) for international buyers?</Accordion.Header>
                                                    <Accordion.Body>
                                                        Minimum order for international shipping 1000kg
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>Can I request custom packaging or labeling for my order?</Accordion.Header>
                                                    <Accordion.Body>
                                                        You can custom the product, be aware customizing product will be addtional charge.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>What are the payment options for international orders?</Accordion.Header>
                                                    <Accordion.Body>
                                                        Further Discussion
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4">
                                                    <Accordion.Header>Do you provide product samples?</Accordion.Header>
                                                    <Accordion.Body>
                                                        We do provide the sample.
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