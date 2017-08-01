import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    console.log('LifeCycle: constructor');
  }
  componentWillMount() {
    console.log('LifeCycle: componentWillMount');
  }
  componentDidMount() {
    console.log('LifeCycle: componentDidMount');
  }
  componentWillUnmount() {
    console.log('LifeCycle: componentWillUnmount');
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('LifeCycle: componentWillUpdate');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('LifeCycle: componentDidUpdate');
  }
  componentWillReceiveProps(nextProps) {
    console.log('LifeCycle: componentWillReceiveProps');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('LifeCycle: shouldComponentUpdate');
    return true;
  }
  render() {
    console.log('LifeCycle: render');
    return (
      <div>
        <h2>LifeCycle</h2>
      </div>
    );
  }
}

export default LifeCycle;