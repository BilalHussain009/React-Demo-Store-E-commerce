import React from 'react';
import uuid from 'uuid';
export const addItem=({
    name = '',
    price = 0,
    company=''
  } = {}
) => ({
  type: 'ADD_ITEM',
  item: {
    id: uuid(),
    name,
    price,
    company
  }
});
