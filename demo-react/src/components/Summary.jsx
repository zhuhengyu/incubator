import React from 'react';
import PropTypes from 'prop-types';

class Summary extends React.Component {
  render() {
    const {
      values
    } = this.props;
    const sum = values.first + values.second + values.third;
    return (
      <div>{sum}</div>
    );
  }
}

Summary.propTypes = {
  values: PropTypes.object.isRequired
};

Summary.defaultProps = {
  values: 0
};

export default Summary;