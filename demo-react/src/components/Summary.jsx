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
  values: PropTypes.object.isRequired,
};

Summary.defaultProps = {
  values: {
    first: 0,
    second: 0,
    third: 0
  }
};

export default Summary;