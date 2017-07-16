import { connect } from 'react-redux';
import Summary from '../components/Summary';

const mapStateToProps = (state, props) => ({
  values: state
});

const mapDispatchToProps = (state, props) => ({});

const SummaryContainer = connect(mapStateToProps, mapDispatchToProps)(Summary);

export default SummaryContainer;