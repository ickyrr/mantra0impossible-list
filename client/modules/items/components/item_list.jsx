import React from 'react';
import {Row,Col,Glyphicon} from 'react-bootstrap';

import Item from './item.jsx';
import ItemProgress from '../../items/components/item_progress.jsx';

const ItemList = ({content}) => (
  <Row className="show-grid">
    <Col xs={12}>
      <ItemProgress />
    </Col>
    <Col xs={12}>
      <a href="/edit"><Glyphicon glyph="plus"></Glyphicon> New Item</a>
    </Col>
      <Item />
  </Row>
);

export default ItemList;
