import React from 'react';

import CounterContainer from '../containers/CounterContainer';
import SummaryContainer from '../containers/SummaryContainer';

class CounterPanel extends React.Component {
  render() {
    return (
      <div>
        <CounterContainer name="first"/>
        <CounterContainer name="second"/>
        <CounterContainer name="third"/>
        <hr/>
        <SummaryContainer/>
      </div>
    );
  }
}

export default CounterPanel;