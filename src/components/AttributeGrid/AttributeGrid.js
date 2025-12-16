import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'worldwide shipping'}
        subtitle={'Limited drops ship globally'}
      />
      <Attribute
        icon={'cycle'}
        title={'returns'}
        subtitle={'Return unworn items in 30 days'}
      />
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
        subtitle={'Shop with confidence'}
      />
    </div>
  );
};

export default AttributeGrid;
