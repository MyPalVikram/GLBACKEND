import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <ul className="groceries">
    {props.groceries.map( (grocery, index) => <ListItem  key={index} grocery={grocery} id={index} togglePurchase={props.togglePurchase}/>)}
  </ul>
)

export default List;
