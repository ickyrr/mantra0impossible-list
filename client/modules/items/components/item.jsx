import React from 'react';
import {Col,Panel,Row,Glyphicon,Checkbox} from 'react-bootstrap';

const Item = () => (
  <Col xs={4}>
    <Panel>
      <Row>
        <Col xs={10}>
          <h2>Thing to do</h2>
        </Col>
        <Col xs={2}>
          <a href="/edit"><Glyphicon glyph="pencil"></Glyphicon></a>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p>Some details about the thing that need to be done.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Checkbox>Complete?</Checkbox>
        </Col>
      </Row>
    </Panel>
  </Col>
);

export default Item;
