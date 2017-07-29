import React from 'react';

import Counter from '../counter';
import Summary from '../summary';

class CounterPanel extends React.Component {
  render() {
    return (
      <div>
        <Counter.view name="first"/>
        <Counter.view name="second"/>
        <Counter.view name="third"/>
        <hr/>
        <Summary.view/>
      </div>
    );
  }
}

export default CounterPanel;