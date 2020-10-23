import React from 'react';

const ListItem = ({grocery, id, togglePurchase}) => (
  <li
    className={grocery.purchased ? 'purchased' : null}
    onClick={()=>togglePurchase(id)}>
    <span> {grocery.name} </span>
    <span> {grocery.quantity} </span>
  </li>
)

export default ListItem