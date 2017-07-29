import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
const mapStateToProps = (state, props) => ({
  values: state
});

const mapDispatchToProps = (state, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
