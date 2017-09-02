import React from 'react';
import {ListItem} from 'material-ui/List';

const style = {
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between'
};

export default ({name, count}) => (
  <ListItem primaryText={
    <div style={style}>
    <span>{name}</span>
    <span>{count}</span>
  </div>}
  />
)
