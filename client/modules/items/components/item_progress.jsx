import React from 'react';
import {ProgressBar} from 'react-bootstrap';
const now = 70;
const ItemProgress = () => (
  <ProgressBar now={now} label={`${now}%`}></ProgressBar>
);

export default ItemProgress;
