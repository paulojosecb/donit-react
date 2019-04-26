import React from 'react';

import './List.css';

import ListHeader from '../ListHeader/ListHeader';

const List = props => (
  <div className="list">
    <ListHeader>{props.listHeader}</ListHeader>
    <div className="list__content">{props.children}</div>
  </div>
);

export default List;
